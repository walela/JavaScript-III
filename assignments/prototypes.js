/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/
console.log(
  `------------------------ beginning prototypes.js -------------------------`
);
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.greet = function() {
  return `Hi, my name is ${this.name}. I am ${this.age} years old.`;
};

Person.prototype.eat = function(edible) {
  this.stomach.push(edible);
  return `${this.name} has eaten a ${edible}`;
};

Person.prototype.poop = function() {
  this.stomach.length = 0; // clear array
};

const ima = new Person("Imali", 25);
console.log(ima);
console.log(ima.greet());
ima.eat("sandwich");
ima.eat("soda");
console.log(`stomach contents after eating: `, ima.stomach);
ima.poop();
console.log(`stomach contents after pooping: `, ima.stomach);
/*

  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
*/
function Car(model_name, make) {
  this.model_name = model_name;
  this.make = make;
  this.odometer = 0;
  this.canBeDriven = true;
}

Car.prototype.drive = function(distance) {
  if (this.canBeDriven === true) {
    this.odometer += distance;
  }
};

Car.prototype.crash = function() {
  this.canBeDriven = false;
  return `I crashed at ${this.odometer} miles!`;
};

Car.prototype.repair = function() {
  this.canBeDriven = true;
};

let myCar = new Car("Corvette", "c8");
myCar.drive(100);
console.log(`Car after driving for a while: `, myCar);
console.log(`This is my new car: `, myCar);
console.log(myCar.crash());
myCar.drive(25);
console.log(`Attempting to drive my car after the crash: `, myCar); // oh no
myCar.repair();
myCar.drive(25);
console.log(`Is my car working after repair?`, myCar);
/*

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

*/
function Baby(name, age) {
  Person.call(this, name, age);
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Chooo chooo chooo!`;
};
var baby = new Baby("Zayden", 2);
console.log(`new baby: `, baby);
console.log(baby.greet(), baby.play());
/*

  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!
*/

function Pet(name, type, gender) {
  this.name = name;
  this.type = type;
  this.gender = gender;
  this.age = 0;
}

Pet.prototype.growOlder = function() {
  this.age += 1;
  return `${this.name} just grew 1 ${this.type} year older!`;
};

Pet.prototype.play = function() {
  return `${this.name} is playing. Fun!`;
};

let zigo = new Pet("Zigo", "dog", "Male");
console.log(zigo);
console.log(zigo.growOlder());
console.log(zigo.growOlder());
console.log(`${zigo.name} is now ${zigo.age} years old!`);
console.log(zigo.play());

function Phone(make, model, owner) {
  this.make = make;
  this.model = model;
  this.owner = owner;
  this.contacts = [];
}

Phone.prototype.ring = function() {
  return `Ring ring!`;
};

Phone.prototype.addContact = function(contact) {
  console.log(`Adding contacts to phone`);
  this.contacts.push(contact);
  return `${this.owner}'s ${this.make} ${this.model} has ${
    this.contacts.length
  } contacts!`;
};

let moto = new Phone("Samsung", "S8", "Austin");
console.log(moto);
console.log(
  `${moto.owner}'s ${moto.make} ${moto.model} has ${
    moto.contacts.length
  } contacts!`
);
moto.addContact({ name: "Mum", number: 254727709928 });
console.log(
  `${moto.owner}'s ${moto.make} ${moto.model} has ${
    moto.contacts.length
  } contacts!`
);
console.log(moto.contacts);
console.log(moto.ring());

function Student(name, cohort, favoriteLanguage) {
  this.name = name;
  this.cohort = cohort;
  this.favoriteLanguage = favoriteLanguage;
  this.knowledge = 0;
  this.scores = [];
}

Student.prototype.introduceSelf = function() {
  return `Hi, my name is ${this.name} and I am in cohort ${
    this.cohort
  }. My favorite language is ${this.favoriteLanguage}`;
};

Student.prototype.study = function(effort) {
  this.knowledge += effort;
  return `${
    this.name
  } just increased his knowledge by ${effort} knowledge units`;
};

Student.prototype.takeExam = function() {
  let score = Math.random() * (100 - this.knowledge) + this.knowledge; // random score between knowledge and maxscore
  this.scores.push(score);
};

let walela = new Student("Austin Walela", "WEBEU3", "JavaScript");
console.log(walela);
console.log(walela.introduceSelf());
console.log(walela.study(35));
walela.takeExam();
walela.takeExam();
console.log(`${walela.name} has the following test scores: `, walela.scores);

/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

console.log(
  `------------------------------ end prototypes.js -----------------------------`
);
