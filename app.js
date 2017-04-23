"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//extend default jQuery API by attaching a new fxn
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var $ = function (selector) {
    //Find DOM element
};
var todo = {
    name: "pick up laundry",
};
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
container.todo(todo);
