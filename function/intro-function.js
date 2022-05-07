// function
// has 2 property ==> name & length

function addTwoNumber(a, b) {
  return a + b;
}

console.log(addTwoNumber.length); // 2 // how many parameter
console.log(addTwoNumber.name);   // name of function

console.log(addTwoNumber.toString());
/**
function addTwoNumber(a, b) {
  return a + b;
} 
*/

/* ------------------------------- */
const addThreeNumber = (a, b, c) => {
  return a + b + c;
}

console.log(addThreeNumber.name);
console.log(addThreeNumber.length); // 3

// change code to string
console.log(addThreeNumber.toString()); 
/*
(a, b, c) => {
  return a + b + c;
}
*/


/* ----------------------- */
// call, apply, bind //
// awesome!!!