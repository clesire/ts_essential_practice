"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoService = (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    Object.defineProperty(TodoService.prototype, "nextId", {
        get: function () {
            return TodoService.getNextId();
        },
        set: function (nextId) {
            TodoService._lastId = nextId - 1;
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.add = function (todo) {
        var newId = this.nextId;
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.getNextId = function () {
        return TodoService._lastId += 1;
    };
    return TodoService;
}());
TodoService._lastId = 0;
var TodoStateChanger = (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
//new TodoStateChanger();
var CompleteTodoStateChanger = (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    function CompleteTodoStateChanger() {
        return _super.call(this, TodoState.Complete) || this;
    }
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        //without overrideing all the logic; just extend
        //continue to access methods defined in base
        //even though it is being overriden
        return !!todo && (todo.state == TodoState.Active
            || todo.state == TodoState.Deleted);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
var SmartTodo = (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    return SmartTodo;
}());
