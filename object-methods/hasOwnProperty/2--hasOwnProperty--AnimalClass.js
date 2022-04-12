class Animal {
  constructor(name, color, speed){
    this.name   = name;
    this.color  = color;
    this.speed  = speed;
  }

  getSpeed(){
    return `${this.name} speed is ${this.speed}`;
  }
}

const duck = new Animal('Duck', 'white', 30);

console.log(duck.getSpeed()); // Duck speed is 30
console.log(duck.hasOwnProperty('name')); // true 
console.log(duck.hasOwnProperty('age'));  // false
console.log(duck.hasOwnProperty('speed')); // true