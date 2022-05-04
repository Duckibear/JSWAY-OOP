/*Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

--> When a character slays another character, the victim's inventory goes to its vanquisher. <--
*/

class Character {
     constructor(name, health, strength) {
     this.name = name;
     this.health = health;
     this.strength = strength;
     this.xp = 0;
     this.gold = 10;
     this.key = 1;
}

attack(target) {
     if (this.health > 0) {
          const damage = this.strength*3;
          console.log(`${this.name} attacks ${target.name}! Inflicts ${damage} damage.`);
          target.health -= damage;
          if(target.health > 0) {
               console.log(`${target.name} has ${target.health} HP remaining.`);
          } else {
               target.health = 0;
               const bonusXP = 15;
               this.xp += bonusXP;
               const bonusGold = 5;
               this.gold += bonusGold;
               const bonusKey = 1;
               this.key += bonusKey;
               console.log(`${this.name} eliminated ${target.name}. Gained ${bonusXP} XP, ${bonusGold} gold, and ${bonusKey} key!`);
          }
     } else {
          if(this.health === 0) {
               console.log(`${target.name} can't attack (they've been eliminated)`);

          }
     }
}

describe() {
     return `${this.name} has ${this.health} HP, ${this.strength} STR, ${this.xp} XP, ${this.gold} gold, and ${this.key} key(s).`;
}
}

class Enemy {
     constructor(name, health, strength) {
     this.name = name;
     this.health = health;
     this.strength = strength;
}
attack(target) {
     if (this.health > 0) {
          const damage = this.strength;
          console.log(`${this.name} attacks ${target.name}! Inflicts ${damage} damage.`);
          target.health -= damage;
          if(target.health > 0) {
               console.log(`${target.name} has ${target.health} HP remaining.`);
          } else {
               target.health = 0;
               const bonusXP = 15;
               this.xp += bonusXP;
               console.log(`${this.name} eliminated ${target.name}. Gained ${bonusXP} XP, ${this.gold} gold, and ${this.key} key!`);
          }
     } else {
          console.log(`${this.name} is unable to attack!`);
     }
}

describe() {
     return `${target.name} has ${this.health} HP and ${this.strength} STR.`;
}
}

let aestra = new Character("Aestra", 650, 50, 30);
let chips = new Character("Chips", 600, 75, 45);

console.log(`Welcome to Maki Force! Are you ready to defeat the Giantess Rebellion?`)
console.log(aestra.describe());
console.log(chips.describe());

let monster1 = new Enemy("Giantee", 300, 15);
console.log(`A wild monster has appeared: Are you prepared to fight ${monster1.name}?`);
monster1.attack(aestra);
monster1.attack(chips);
chips.attack(monster1);
aestra.attack(monster1)
chips.attack(monster1);

console.log(aestra.describe());
console.log(chips.describe());

let monster2 = new Enemy("Stomper", 450, 25);
console.log(`A wild monster has appeared: Are you prepared to fight ${monster2.name}?`);
aestra.attack(monster2);
chips.attack(monster2);
aestra.attack(monster2);


console.log(aestra.describe());
console.log(chips.describe());

aestra.attack(chips);
chips.attack(aestra);
aestra.attack(chips);
aestra.attack(chips);
chips.attack(aestra);
aestra.attack(chips);
aestra.attack(chips);