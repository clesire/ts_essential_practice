//before no way to prevent adding length 
//of different types of parameters
// function totalLen(
//     x: {length:number},
//     y: {length:number}) {
//     var total: number = x.length + y.length;
//     return total;
// }
// var l = totalLen('hello',[22,33]);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//with generic + anonymous type param
function totalLen(x, y) {
    var total = x.length + y.length;
    return total;
}
var l1 = totalLen('hello', [22, 33]);
var l2 = totalLen('hello', 'world');
function totalLenI(x, y) {
    var total = x.length + y.length;
    return total;
}
/***BE AWARE**********/
//the params can be any type compatible with type T
//including those inherit from T
var CustomArray = (function (_super) {
    __extends(CustomArray, _super);
    function CustomArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomArray;
}(Array));
var len = totalLen([1, 2, 3], new CustomArray());
//Another caveat: not allowed to refer to generic param
//that you defined in the same type list
//class KeyValuePairPrinter<T,U, V extends KeyValuePaair<T,U>> 
