export {};
//ES5
// function TodoService() {}
// TodoService.lastId = 0;
// TodoService.getNextId = function() {
//         return TodoService.lastId += 1;
// }
// TodoService.prototype.add = function(todo) {
//     var newId = TodoService.getNextId();
// }
//ES6
class TodoService {
    static lastId: number = 0;
    constructor(private todos: Todo[]) {}
    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }
    getAll() {
        return this.todos;
    }
    static getNextId(): number {
        return TodoService.lastId += 1;
    }
}
interface Todo {
    name:string;
    state:TodoState;
}
enum TodoState {
    New = 1,
    Active, Complete, Deleted
}
//generally dont want to apply setter/getter to obj literal
var todo = {
    name: 'Pick up laundry',
    get state() {
        return this._state;
    },
    set state(newState){
        if (newState == TodoState.Complete){
            var canBeCompleted = 
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            if (!canBeCompleted){
                throw "State not Active|Deleted; Can't Complete";
            }
        }
        this._state = newState;
    }
}
todo.state = TodoState.Complete;
//use class instead
class SmartTodo {
    _state: TodoState;
    name: string;
    get state() {
        return this._state;
    }
    set state(newState){
        if (newState == TodoState.Complete){
            var canBeCompleted = 
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            if (!canBeCompleted){
                throw "State not Active|Deleted; Can't Complete";
            }
        }
        this._state = newState;
    }
    constructor(name:string){
        this.name = name;
    }
}
var smartTodo = new SmartTodo('pick up laundry');
