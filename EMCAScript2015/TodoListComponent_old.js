// //simply a UI component that handles the rendering of Todo items
// //lets other components know about the user's actions
// //by raising a DOM event
// var TodoListComponent = (function() {
//     function TodoListComponent(el) {
//         this.$el = $(el);
//     }
//     TodoListComponent.prototype.render = function (todos) {
//         this.$el.html('');
//         if (!todos.length) {
//             this.$el.html (
//                 "<div class='list-group-item text-center text-giant'>" +
//                 "   <strong>You've completed everything!</strong>" +
//                 "</div>"
//             );
//             return;
//         }
//         for (var index in todos) {
//             var todo  = todos[index];
//             renderTodo(todo).appendTo(this.$el);
//         }
//     };
//     function renderTodo(todo) {
//         return $(
//             "<div class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : 'not done') + ">" +
//             "   <div class='row'>" + 
//             "       <div class='col-md-2 text-center'>" + 
//             "           <i class='incomplete glyphicon glyphicon-unchecked text-muted text-center'></i>" + 
//             "           <i class='completed-indicator completed glyphicon glyphicon-ok text-center'></i>" + 
//             "       </div>" + 
//             "       <div class='col-md-10'>" + 
//             "           <span class='incomplete text-giant'>" + todo.name + "</span"> + 
//             "           <span class='completed text-strikethrough text-muted'>" + todo.name + "</span"> + 
//             "       </div>" + 
//             "   </div>" + 
//             "   <div class='clearfix'></div>" + 
//             "</div>"
//         ).on('click', function() {
//             var event = document.createEvent('CustomEvent');
//             event.initCustomEvent('todo-toggle', true,true, {todoId:todo.id});
//             this.dispatchEvent(event);
//         });
//     }
//     return TodoListComponent;
// })();