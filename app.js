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
        todo.id = this.nextId;
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.getAll = function () {
        //actual todo items exposed to manipulation
        //return this.todos;
        //performant way to clone objects
        var clone = JSON.stringify(this.todos);
        return JSON.parse(clone);
    };
    TodoService.getNextId = function () {
        return TodoService._lastId += 1;
    };
    TodoService.prototype.getById = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    TodoService.prototype.delete = function (todoId) {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex, 1);
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
