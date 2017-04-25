interface Todo {
    id: number;
    name: string;
    state: TodoState;
}
declare enum TodoState {
    New = 1,
    Active = 2,
    Complete = 3,
    Deleted = 4,
}
interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}
declare class TodoService implements ITodoService {
    private static _lastId;
    private static generateTodoId();
    private static clone<T>(src);
    private todos;
    constructor(todos: string[]);
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
    private _find(todoId);
}
