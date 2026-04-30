{
//

class animal {
    name: string;
    species: string;
    sound: string;

    constructor (name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
}


const dog = new animal("Rex", "Dog", "Woof");
const cat = new animal("Whiskers", "Cat", "Meow");

dog.sound = "Bark";
cat.species = "Feline";

console.log(`${dog.name} the ${dog.species} says ${dog.sound}`);
console.log(`${cat.name} the ${cat.species} says ${cat.sound}`);

//
}