var array = [
    "pick up drycleaning",
    "clean rooms",
    "drink water"
];

for (var index in array){
    var value=array[index];
    console.log(`${index}: ${value}`);
}

for (var value of array){
    console.log(`${value}`);
}
/*
0: pick up drycleaning
1: clean rooms
2: drink water
pick up drycleaning
clean rooms
drink water
*/