//not possible in JS; function overload not same as in C#/Java
//in JS, only 1 implementation; or 2nd just overwrites the first
//function totalLen(x: string, y: string): number {}
//function totalLen(x: any[], y: any[]): number {}
function totalLen(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    //type guard syntax
    if (x instanceof Array) {
        x.push('abc');
    }
    //possible because string is a primitive type
    //if(typeof x === 'string'){
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
totalLen([1, 2, 3], 'hello');
