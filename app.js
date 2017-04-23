var array = [1, 2, 3];
var array2 = [1, 2, 3];
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(1, 'first');
var pair2 = new KeyValuePair('second', new Date(Date.now()));
var pair3 = new KeyValuePair(3, 'third');
var KeyValuePairPrinter = (function () {
    function KeyValuePairPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrinter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p.key + ":" + p.value);
        }
    };
    return KeyValuePairPrinter;
}());
var printer = new KeyValuePairPrinter([pair1, pair3]);
//pair2 does not share the same generic parameters 
//thus different type of object
//var printer=new KeyValuePairPrinter([pair1,pair2])
printer.print();
