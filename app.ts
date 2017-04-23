export {};
interface Todo {
    name:string;
    state:TodoState;
}
enum TodoState {
    New = 1,
    Active, Complete, Deleted
}
abstract class TodoStateChanger {
    constructor(private newState: TodoState) {}
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