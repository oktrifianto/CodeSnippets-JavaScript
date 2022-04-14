/**
 * Object.create()
 * creates a new object using an existing object as the prototype of the newly created object
 * @see   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

const animal = {
  isBird: false,
  printIntro: function() {
    console.log(`The animal is ${this.name}. Is a bird? ${this.isBird}`);
  }
}

// create object
const duck1 = Object.create(animal);

duck1.name    = 'Duckduckgo';
duck1.isBird  = true; // inherited property can be overwritten --- from false to true

duck1.printIntro(); 
// The animal is Duckduckgo. Is a bird? true

console.log(animal);
// { isBird: false, printIntro: [Function: printIntro] }