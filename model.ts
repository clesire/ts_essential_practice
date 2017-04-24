namespace DataAccess {
    import Model = TodoApp.Model;
    import Todo = Model.Todo;
    
    export interface ITodoService {
        add(todo: Todo): Todo;
        delete(todoId: number): void;
        getAll(): Todo[];
        getById(todoId: number): Todo;
    }
}
namespace TodoApp.Model {
    export interface Todo {
        id: number;
        name:string;
        state:TodoState;
    }
    export enum TodoState {
        New = 1,
        Active, Complete, Deleted
    }
}