/**
 * split out the function from object
 * ----------------------------------------
 */

let name1 = {
  firstName : "John",
  lastName : "Erroro"
}

// create function 
let printFullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call(name1); // John Erroro