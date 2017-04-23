export {};
var todo: { name:string };

//error
//todo = { age:41 }

//accept any 2 variables that has a length prop
function totalLen(x: {length:number}, 
                  y: {length:number}): number {
    var total: number = x.length + y.length;
    return total;
}