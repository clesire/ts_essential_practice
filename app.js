function add() {
    var values = Array.prototype.splice.call(arguments, [1]), total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
        var value = values_2[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'sub':
                total -= value;
                break;
        }
    }
    return total;
}
calculate('add', 1, 2, 3, 4, 5);
var source = [3, 4, 5];
var target = [1, 2].concat(source, [6, 7]);
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
//Array.prototype.push.apply(list, toAdd);
list.push.apply(list, toAdd);
