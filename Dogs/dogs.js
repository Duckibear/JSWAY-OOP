//Dogs
/*Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);*/


class Dog {
     constructor(name, species, size) {
          this.name = name;
          this.species = species;
          this.size = size;
     }

     bark() {
          if (this.size > 60) {
               return `Grrr! Grrr!`;
          } else {
               return `Woof! Woof!`;
          }
     }
}

let hanyu = new Dog("Hanyu", "German Shepherd", 65);
console.log(`${hanyu.name} is a ${hanyu.species} measuring at ${hanyu.size}!`);
console.log(`A squirrel has appeared. ${hanyu.name} barks: ${hanyu.bark()}`);

let jaxson = new Dog("Jaxson", "Shitzu", 25);
console.log(`${jaxson.name} is a ${jaxson.species} measuring at ${jaxson.size}!`);
console.log(`A squirrel has appeared. ${jaxson.name} barks: ${jaxson.bark()}`);