export {};
interface Todo {
    name: string;
    state: TodoState;
}
var todo: Todo = {
    name: "Pick up laundry",
    state: TodoState.New
}
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}
function delete1(todo1: Todo){
    if (todo1.state != TodoState.Complete) {
        throw new Error("Can't delete incomplete task");
    }
}