"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function TodoService() {   
//     this.todos = [];
// }
// TodoService.prototype.getAll = function() {
//     return this.todos;
// }
var TodoService = (function () {
    // todos: Todo[] = [];
    // constructor(todos: Todo[]) {
    //     this.todos = todos;
    // }
    //the above can be shortened to 
    //(defining a constructor param and a class prop)
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.getAll = function () {
    };
    return TodoService;
}());
