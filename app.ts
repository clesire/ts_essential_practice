//intention: return type should be same as of 'value'
//since parse accepts a string to represent 
//an object of any type, TS can't guess the type
// function clone(value) {
//     let serialized = JSON.stringify(value);
//     return JSON.parse(serialized);
// }
function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
clone('hello')
clone(123)
var todo: Todo = {
    id:1, 
    name: 'pickup laundry',
    state: TodoState.Active
};
clone(todo);
//even work with object literal
clone({name:'emptyname'})