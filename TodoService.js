System.register(["./Model", "./Validators"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return _lastId += 1;
    }
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    }
    //target:the object that the member lives on.
    //e.g. an instance of a to do service
    //method name: the name of the method to be decorated
    //descriptor: an object that contains all of the meta data
    //for the method that you are looking to modify
    function log(target, methodName, descriptor) {
        descriptor.value;
        var originalMethod = TodoService.prototype.add;
        TodoService.prototype.add = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(methodName + "(" + JSON.stringify(args) + ")");
            var returnValue = originalMethod.apply(this, args);
            console.log(methodName + "(" + JSON.stringify(args) + ") => " + returnValue);
            return returnValue;
        };
    }
    var Model_1, Validators_1, _lastId, TodoService, originalMethod;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            },
            function (Validators_1_1) {
                Validators_1 = Validators_1_1;
            }
        ],
        execute: function () {
            _lastId = 0;
            TodoService = (function () {
                function TodoService(todos) {
                    var _this = this;
                    this.todos = [];
                    if (todos) {
                        todos.forEach(function (todo) { return _this.add(todo); });
                    }
                }
                TodoService.prototype.add = function (input) {
                    var todo = new Validators_1.ValidatableTodo();
                    todo.id = generateTodoId();
                    todo.state - Model_1.TodoState.Active;
                    if (typeof input === 'string') {
                        todo.name = input;
                    }
                    else if (typeof input.name === 'string') {
                        todo.name = input.name;
                    }
                    else {
                        throw "Invalid Todo name!";
                    }
                    var errors = todo.validate();
                    if (errors.length) {
                        var combinedErrors = errors.map(function (x) { return x.property + ":" + x.message; });
                        throw "Invalid Todo: " + combinedErrors;
                    }
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.clearCompleted = function () {
                    this.todos = this.todos.filter(function (x) { return x.state == Model_1.TodoState.Active; });
                };
                TodoService.prototype.getAll = function () {
                    return clone(this.todos);
                };
                TodoService.prototype.getById = function (todoId) {
                    var todo = this._find(todoId);
                    return clone(todo);
                };
                TodoService.prototype.toggle = function (todoId) {
                    var todo = this._find(todoId);
                    if (!todo)
                        return;
                    switch (todo.state) {
                        case Model_1.TodoState.Active:
                            todo.state = Model_1.TodoState.Complete;
                            break;
                        case Model_1.TodoState.Complete:
                            todo.state = Model_1.TodoState.Active;
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
            __decorate([
                log
            ], TodoService.prototype, "add", null);
            exports_1("default", TodoService);
            //to add the logging logic without changing the code
            //inside of the add method, wrap the original method
            //in another method.
            //It replaces the original method with another method 
            //by actually calling that original method, 
            //and then returning its result.
            originalMethod = TodoService.prototype.add;
            TodoService.prototype.add = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.log("add(" + JSON.stringify(args) + ")");
                var returnValue = originalMethod.apply(this, args);
                console.log("add(" + JSON.stringify(args) + ") => " + returnValue);
                return returnValue;
            };
        }
    };
});
//# sourceMappingURL=TodoService.js.map