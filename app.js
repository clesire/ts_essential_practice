var container = document.getElementById('container');
function Counter1(el) {
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        //1. causing NaN on click
        //1. different scope
        this.count += 1;
        el.innerHTML = this.count;
    });
}
function Counter2(el) {
    this.count = 0;
    el.innerHTML = this.count;
    //2. creates local var to reference this
    var _this = this;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
function Counter3(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    }); //returns the output of the expression
}
new Counter3(container);
var filtered1 = [1, 2, 3].filter(function (x) {
    return x > 0;
});
var filtered2 = [1, 2, 3].filter(function (x) { return x > 0; });
var filtered3 = [1, 2, 3].filter(function (x, y) { return x > y; });
