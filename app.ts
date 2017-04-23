export {};
//function TodoService() {   
//     this.todos = [];
// }
// TodoService.prototype.getAll = function() {
//     return this.todos;
// }

class TodoService {
    // todos: Todo[] = [];
    // constructor(todos: Todo[]) {
    //     this.todos = todos;
    // }
    //the above can be shortened to 
    //(defining a constructor param and a class prop)
    constructor(private todos: Todo[]){
    }
    getAll() {

    }
}
