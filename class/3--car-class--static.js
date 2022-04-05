/**
 * =================
 * What is Static ?
 * =================
 * static class methods ---> defined on the class itself
 * we cannot call a static method on an object
 */
class Car {
  constructor(name){
    this.name = name;
  }

  // static method --> can use if only call class, only able to be accessed by object of a class
  // it is not part of the objects but it is part of class definition
  static hello(){
    return 'Hello Car';
  }
}

let mini_car = new Car("Ford");

// console.log(Car.hello());  // can access 
// Hello Car

// console.log(mini_car.hello()); // can not access because object
// TypeError: mini_car.hello is not a function

console.log(Car.hello(mini_car)); // another solution -> sent object as a parameter
// Hello Car
