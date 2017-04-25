var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var TodoService = (function () {
    function TodoService(todos) {
        var _this = this;
        this.todos = [];
        if (todos) {
            todos.forEach(function (todo) { return _this.add(todo); });
        }
    }
    TodoService.generateTodoId = function () {
        return TodoService._lastId += 1;
    };
    TodoService.clone = function (src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };
    TodoService.prototype.add = function (input) {
        var todo = {
            id: TodoService.generateTodoId(),
            name: null,
            state: TodoState.Active
        };
        if (typeof input === 'string') {
            todo.name = input;
        }
        else if (typeof input.name === 'string') {
            todo.name = input.name;
        }
        else {
            throw "Invalid Todo name!";
        }
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (x) { return x.state == TodoState.Active; });
    };
    TodoService.prototype.getAll = function () {
        return TodoService.clone(this.todos);
    };
    TodoService.prototype.getById = function (todoId) {
        var todo = this._find(todoId);
        return TodoService.clone(todo);
    };
    TodoService.prototype.toggle = function (todoId) {
        var todo = this._find(todoId);
        if (!todo)
            return;
        switch (todo.state) {
            case TodoState.Active:
                todo.state = TodoState.Complete;
                break;
            case TodoState.Complete:
                todo.state = TodoState.Active;
                break;
        }
    };
    TodoService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        if (filtered.length) {
            return filtered[0];
        }
        return null;
    };
    return TodoService;
}());
TodoService._lastId = 0;
