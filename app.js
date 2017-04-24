//require syntax
//import Model = require('./model');
//import Todo = Model.Todo;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EMCAScript: a standard that will have native
//browser support
var model_1 = require("./model");
var dataAccess_1 = require("./dataAccess");
var service = new dataAccess_1.TodoService([]);
service.add({
    id: 1,
    name: 'pick up laundry',
    state: model_1.TodoState.New,
});
var todos = service.getAll();
todos.forEach(function (todo) {
    return console.log(todo.name + " [" + model_1.TodoState[todo.state] + "]");
});
