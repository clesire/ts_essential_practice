//simply a UI component that handles the rendering of Todo items
//lets other components know about the user's actions
//by raising a DOM event

declare var $: any;

 class TodoListComponent {
   private $el: jQuery;
   constructor(el: HTMLElement) {
     this.$el = $(el);
   }
   
   render(todos: Todo[]) {
 
     this.$el.html('');
     
     if (!todos.length) {
       this.$el.html(
         "<div class='list-group-item text-center text-giant'>" +
         "  <strong>You've completed everything you needed to do!</strong>" +
         "</div>"
       );
       
       return;
     }
     
     for(let todo of todos) {
       this.renderTodo(todo).appendTo(this.$el);
     }
   }
 
   renderTodo(todo: Todo) {
     return $(
       "<div class='todo-item list-group-item "+ (todo.state == 2 ? 'completed' :  '') +"'>" +
       "   <div class='row'>" +
       "     <div class='col-md-2 text-center'>" +
       "       <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>" +
       "       <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>" +
       "     </div>" +
       "     <div class='col-md-10'>" +
       "      <span class='incomplete text-giant'>" + todo.name + "</span>" +
       "      <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>" +
       "    </div>" +
       "  </div>" +
       "  <div class='clearfix'></div>" +
       "</div>"
     ).on('click', function() {
       let event = document.createEvent('CustomEvent');
       event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
       this.dispatchEvent(event);
     });
   }
 
 }