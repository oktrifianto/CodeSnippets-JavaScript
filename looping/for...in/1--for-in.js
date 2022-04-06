/**
 * ==============
 * for ... in 
 * ==============
 * `for ... in`
 * 
 * A for...in loop only iterates over enumerable, non-Symbol properties.
 * 
 * Syntax
 * ------
 * for (variable in object) {
 *     statement
 * } 
 */

// person object
const person = {
  "name"    : "Amel",
  "age"     : 21,
  "address" : "Chicago"
}

// iterate using for ... in
for (const property in person) {
  console.log(`${property} = ${person[property]}`)
}

// result

/*
name = Amel
age = 21
address = Chicago
*/