export {};
interface Todo {
    name: string;
    completed?: boolean;
}
interface jQuery {
    (select: (string | any)): jQueryElement; 
    fn: any;
    version: number;
}
interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
    //jQuery is 3rd party lib
    //BAD idea to update such interface 
    //just to add my own custom ext
    //todo(): Todo;
    //todo(todo: Todo): jQueryElement;
}
//to append ext, just create another defs
interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}
//extend default jQuery API by attaching a new fxn
$.fn.todo = function(todo?: Todo): Todo {
    if (todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }
}
var $ = <jQuery>function(selector) {
    //Find DOM element
}
var todo = {
    name: "pick up laundry",
}
var container = $('#container')
container.data('todo', todo);
var savedTodo = container.data('todo');
container.todo(todo);