//before no way to prevent adding length 
//of different types of parameters
// function totalLen(
//     x: {length:number},
//     y: {length:number}) {
//     var total: number = x.length + y.length;
//     return total;
// }
// var l = totalLen('hello',[22,33]);

//with generic + anonymous type param
function totalLen<T extends {length:number}>(
     x: T,
     y: T) {
    var total: number = x.length + y.length;
    return total;
}
var l1 = totalLen('hello',[22,33]);
var l2 = totalLen('hello','world');

//with generic + interface
interface IHaveALength {
    length: number;
}
function totalLenI<T extends IHaveALength>(
     x: T,
     y: T) {
    var total: number = x.length + y.length;
    return total;
}
/***BE AWARE**********/
//the params can be any type compatible with type T
//including those inherit from T
class CustomArray<T> extends Array<T> {}
var len = totalLen([1,2,3],new CustomArray<number>())
//Another caveat: not allowed to refer to generic param
//that you defined in the same type list
//class KeyValuePairPrinter<T,U, V extends KeyValuePaair<T,U>>