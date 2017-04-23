"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var TodoService = (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        var newId = TodoService.getNextId();
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService.lastId += 1;
    };
    return TodoService;
}());
TodoService.lastId = 0;
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
