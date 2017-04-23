export {};
//disambiguation for whether a file
//= module (and have its own scope)
//= script (and share the global scope with other scripts).
//TS's solution=to simply state that a module is any file
//which contains an import or export.

//data structure
interface Todo {
    name: string;
    completed?: boolean; //optional
}
//service
interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}
//var todo = <Todo>{};
let todo: Todo = {
    name: "pick up"
};