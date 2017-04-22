var array = [123, "pick up drycleaning", false];
var id = array[0], title = array[1], completed = array[2];
var a = 1;
var b = 5;
//before to swap
var temp = a;
a = b;
b = temp;
//with destructuring
_a = [b, a], a = _a[0], b = _a[1];
//also work with objects or mapping function return vals
//the values assinged not by locaions, 
//but by matching the name of the property & variable
function getTodo(id) {
    var todo = {
        id_o: 123,
        title_o: "pick up drycleaning",
        completed_o: false
    };
    return todo;
}
var _b = getTodo(123), todoId = _b.id_o, title_o = _b.title_o, completed_o = _b.completed_o;
//countdown function from 2.optional_param
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    var current = initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
var _a;
