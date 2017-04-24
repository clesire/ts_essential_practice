//require syntax
//import Model = require('./model');
//import Todo = Model.Todo;

//EMCAScript: a standard that will have native
//browser support
import { Todo, TodoState } from './model';
import { TodoService } from './dataAccess';

let service = new TodoService([]);
service.add({
    id: 1,
    name: 'pick up laundry',
    state: TodoState.New,
});

let todos = service.getAll();
todos.forEach(todo => 
    console.log(`${todo.name} [${TodoState[todo.state]}]`)
)
