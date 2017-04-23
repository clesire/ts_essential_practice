var animal = {
    name: "Fido",
    species: "Dog",
    age: getAge(2017),
    speak: function() {
        console.log('Woof');
    },
}
function getAge(byear) {
    return Date.now() - byear;
}
//function totalLen(x: any,y: any): any 
//since every object has a length property
//TypeScript can't figure out the type
//-> any
function totalLen(x,y) { 
    let total = x.length + y.length;
    return total;
}