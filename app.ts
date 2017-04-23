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