/**
 * split out the function from object
 * ----------------------------------------
 */

let name1 = {
  firstName : "John",
  lastName : "Erroro"
}

// create function 
let printFullName = function(city) {
  console.log(`${this.firstName} ${this.lastName} from ${city}`);
}

printFullName.call(name1, "Las Vegas"); // John Erroro

// ---------------- another object ---------
let name2 = {
  firstName: "Amela",
  lastName : "Cyana"
}

printFullName.call(name2, "Dubai");