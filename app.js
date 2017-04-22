var array = [
    "pick up drycleaning",
    "clean rooms",
    "drink water"
];
for (var index in array) {
    var value = array[index];
    console.log(index + ": " + value);
}
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log("" + value);
}
/*
0: pick up drycleaning
1: clean rooms
2: drink water
pick up drycleaning
clean rooms
drink water
*/ 
