declare var $: any;
declare class TodoListComponent {
    private $el;
    constructor(el: HTMLElement);
    render(todos: Todo[]): void;
    renderTodo(todo: Todo): any;
}
