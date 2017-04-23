interface IIdGenerator {
    nextId: number;
}

class TodoService implements ITodoService, IIdGenerator {
    private static _lastId: number = 0;
    get nextId() {
        return TodoService.getNextId();
    }
    set nextId(nextId){
        TodoService._lastId = nextId - 1;
    }
    constructor(private todos: Todo[]) {}
    add(todo: Todo): Todo {
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    }
    getAll(): Todo[] {
        //actual todo items exposed to manipulation
        //return this.todos;
        //performant way to clone objects
        var clone = JSON.stringify(this.todos);
        return JSON.parse(clone);
    }
    static getNextId(): number {
        return TodoService._lastId += 1;
    }
    getById(todoId: number):Todo {
        var filtered = 
            this.todos.filter(x=>x.id == todoId);
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    }
    delete(todoId: number): void {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex,1);
    }
}
abstract class TodoStateChanger {
    constructor(protected newState: TodoState) {}
    //whether todo may be changed to new state
    abstract canChangeState(todo: Todo): boolean;

    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
//new TodoStateChanger();
class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Complete);
    }
    canChangeState(todo: Todo): boolean {
        //without overrideing all the logic; just extend
        //continue to access methods defined in base
        //even though it is being overriden
        return !!todo && (
            todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        )
    }
}
class SmartTodo {
    constructor(public name: string) {}
}