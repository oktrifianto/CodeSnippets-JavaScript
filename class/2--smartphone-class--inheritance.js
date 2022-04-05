// Define Smartphone Class
class Smartphone {
  constructor(b){
    this.brand = b;
  }

  owned() {
    return `I have a ${this.brand} phone`;
  }
}

// Create an objects 
const samsung = new Smartphone('Samsung');
const xiaomi  = new Smartphone('Xiaomi');
console.log(samsung.owned()) // I have a Samsung phone

/**
 * -------------------------------------
 * Inherit class - Create Derived Class
 * using `extends` keyword
 * super() -> method refers to parent class
 * using super() in constructor method, 
 * --- this is will call the parent's costructor method and get access to the parent properties & methods
 * -------------------------------------
 */
class Model extends Smartphone {
  constructor(brand, m) {
    super(brand);
    this.model = m;
  }

  show(){
    // call this.owned() method from parent class
    return `${this.owned()}, it is a ${this.model}` 
  }
}

const redmi10A        = new Model('Xiaomi', 'Redmi A 10')
const samsungGalaxyA1 = new Model('Samsung', 'Galaxy A1')

console.log(redmi10A.show())
console.log(samsungGalaxyA1.show())