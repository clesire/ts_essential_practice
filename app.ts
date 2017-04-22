var array = [123, "pick up drycleaning", false];
var [id, title, completed] = array;

var a=1;
var b=5;

//before to swap
var temp=a;
a=b;
b=temp;
//with destructuring
[a,b] = [b,a];

//also work with objects or mapping function return vals
//the values assinged not by locaions, 
//but by matching the name of the property & variable
function getTodo(id) {
    var todo = {
        id_o:123,
        title_o: "pick up drycleaning",
        completed_o: false
    }
    return todo;
}

var {id_o: todoId, title_o, completed_o} = getTodo(123);

//countdown function from 2.optional_param
function countdown({ 
    initial, 
    final: final=0,
    interval: interval=1,
    initial: current    
}) {

    var current = initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}