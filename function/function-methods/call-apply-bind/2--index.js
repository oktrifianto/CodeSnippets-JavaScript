/**
 * split out the function from object
 * ----------------------------------------
 */

let name1 = {
  firstName : "John",
  lastName : "Erroro"
}

// create function 
let printFullName = function(city, zip) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${zip}`);
}

printFullName.call(name1, "Las Vegas", 19293); // John Erroro

// ---------------- another object ---------
let name2 = {
  firstName: "Amela",
  lastName : "Cyana"
}

printFullName.call(name2, "Dubai", 98733);

// apply method --- passing using array list
printFullName.apply(name2, ["Dubai", 4382]);