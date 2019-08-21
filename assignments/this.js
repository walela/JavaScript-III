/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Window binding -- This is the default binding. this will refer to the window object.
* 2. Implicit binding -- In this binding, this refers to the parent object containing the `this` keyword.
This is seen for example in object declarations.
* 3. Explicit binding - this is when the value of 'this' is explicitly set via `call`, `bind`  or `apply` functions.
* 4. New Binding - In this case, this refers to the newly created object in a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var username = "austin";
console.log(this.username); // will output austin because username is bound to the window object.

// Principle 2

// code example for Implicit Binding
let player = {
  name: "Magnus Carlsen",
  title: "World Chess Champion",
  introduceSelf: function() {
    return `Hi, I'm ${this.name} and I am the ${this.title}`;
  }
};

// Principle 3

// code example for New Binding
function Language(name, type) {
  this.name = name;
  this.type = type;
}

let js = new Language("JavaScript", "Functional");
console.log(js.name, js.type);

// Principle 4
function logMessage() {
  console.log(`${this.name} is a great player!`);
}

let players = [
  { name: "Lebron James" },
  { name: "Chris Paul" },
  { name: "Yao Ming" }
];

players.forEach(player => logMessage.call(player));
// code example for Explicit Binding
