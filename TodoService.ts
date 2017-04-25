import { Todo, TodoState } from './Model'
import { ValidatableTodo } from './Validators'

export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
    let _lastId = 0;
    function generateTodoId(): number {
        return _lastId += 1;
    }
    function clone<T>(src: T): T {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }

export default class TodoService implements ITodoService {

    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if(todos) {
            todos.forEach(todo => this.add(todo));
        }
    }
    //accepts a todo name or todo object
    add(todo: Todo): Todo 
    add(todo: string): Todo
    @log
    add (input): Todo {
        var todo = new ValidatableTodo();
        todo.id = generateTodoId();
        todo.state - TodoState.Active;

        if (typeof input === 'string'){
            todo.name = input;
        } else if (typeof input.name === 'string') {
            todo.name = input.name;
        } else {
            throw "Invalid Todo name!";
        }

        let errors = todo.validate();
        if(errors.length){
            let combinedErrors = errors.map(
                x=> `${x.property}:${x.message}`);
            throw `Invalid Todo: ${combinedErrors}`;
        }
        this.todos.push(todo);
        return todo;
    }
    clearCompleted(): void{
        this.todos = this.todos.filter(
            x => x.state == TodoState.Active
        );
    }
    getAll(): Todo[] {
        return clone(this.todos);
    }
    getById (todoId: number): Todo {
        var todo = this._find(todoId);
        return clone(todo);
    }
    toggle (todoId: number): void {
        var todo = this._find(todoId);
        if (!todo) return;
        switch(todo.state) {
            case TodoState.Active: 
                todo.state = TodoState.Complete;
                break;
            case TodoState.Complete:
                todo.state = TodoState.Active;
                break;
        }
    }
    private _find (todoId: number): Todo {
        var filtered = this.todos.filter(
            x=> x.id == todoId
        );
        if(filtered.length) {
            return filtered[0];
        }
        return null;
    }   
}
//to add the logging logic without changing the code
//inside of the add method, wrap the original method
//in another method.
//It replaces the original method with another method 
//by actually calling that original method, 
//and then returning its result.
var originalMethod = TodoService.prototype.add;
TodoService.prototype.add = function(...args){

    console.log(`add(${JSON.stringify(args)})`);
    let returnValue = originalMethod.apply(this, args);
    console.log(`add(${JSON.stringify(args)}) => ${returnValue}`);
    return returnValue;
}
//target:the object that the member lives on.
//e.g. an instance of a to do service
//method name: the name of the method to be decorated
//descriptor: an object that contains all of the meta data
//for the method that you are looking to modify
function log(target: Object, methodName:string, descriptor:
TypedPropertyDescriptor<Function>) {
    descriptor.value
    var originalMethod = TodoService.prototype.add;
TodoService.prototype.add = function(...args){

    console.log(`${methodName}(${JSON.stringify(args)})`);
    let returnValue = originalMethod.apply(this, args);
    console.log(`${methodName}(${JSON.stringify(args)}) => ${returnValue}`);
    return returnValue;
}
}