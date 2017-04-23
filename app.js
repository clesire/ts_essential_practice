"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TodoService() {
    this.todos = [];
}
TodoService.prototype.getAll = function () {
    return this.todos;
};
var service = new TodoService();
service.getAll();
