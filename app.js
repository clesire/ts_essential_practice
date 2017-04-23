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
//generally dont want to apply setter/getter to obj literal
var todo = {
    name: 'Pick up laundry',
    get state() {
        return this._state;
    },
    set state(newState) {
        if (newState == TodoState.Complete) {
            var canBeCompleted = this.state == TodoState.Active
                || this.state == TodoState.Deleted;
            if (!canBeCompleted) {
                throw "State not Active|Deleted; Can't Complete";
            }
        }
        this._state = newState;
    }
};
todo.state = TodoState.Complete;
//use class instead
var SmartTodo = (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeCompleted = this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "State not Active|Deleted; Can't Complete";
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return SmartTodo;
}());
var smartTodo = new SmartTodo('pick up laundry');
