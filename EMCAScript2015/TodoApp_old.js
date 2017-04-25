// //class that orchestrates
// //the DOM, the TodoService, the TodoListComponent
// //to create a working app
// function TodoApp(el, todos){
//     this.todoService = new TodoService(todos);
//     this.initialize(el);
// }
// TodoApp.prototype.addTodo = function (todoName){
//     this.todoService.add(todoName);
//     this.renderTodos();
// }
// TodoApp.prototype.clearCompleted = function () {
//     this.todoService.clearCompleted();
//     this.renderTodos();
// }
// TodoApp.prototype.toggleTodoState = function (todoId) {
//     this.todoService.toggle(todoId);
//     this.renderTodos();
// }
// TodoApp.prototype.renderTodos = function () {
//     var todos = this.todoService.getAll();
//     this.todoList.render(todos);
// }
// TodoApp.pro