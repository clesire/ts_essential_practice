var animal = {
    name: "Fido",
    species: "Dog",
    age: 5,
    speak: function () {
        console.log('Woof');
    }
};
function makeAnimalSpeak(animal) {
    //duck-typing
    //function doesn't check if the object is a certain type
    //or if the method exists before calling it
    animal.speak();
}
makeAnimalSpeak(animal);
