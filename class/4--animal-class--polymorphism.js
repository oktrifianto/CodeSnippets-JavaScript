/**
 * ======================
 * What is Polymorphism?
 * ======================
 * What?  ability to call same method on different object
 *        and each object responds in different way
 * @see https://stackoverflow.com/questions/27642239/what-is-polymorphism-in-javascript
 */

class Animal {
  constructor(sound){
    this.sound = sound;
  }

  // one method
  showSound(){
    return `Sound is ${this.sound}`;
  }
}

// objects different
let dog       = new Animal('GugGug');
let chicken   = new Animal('KokKokKok');
let duck      = new Animal('WekWekWek');


// will responds different ways
console.log(dog.showSound()); // Sound is GugGug
console.log(chicken.showSound()); // Sound is KokKokKok
console.log(duck.showSound()); // Sound is WekWekWek