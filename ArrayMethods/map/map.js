/**
 * ============================
 * `map()` method in JavaScript
 * @see         - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @description - creates new array populated with the results of calling a provided function on every element in calling array
 * ============================
 */

// ==================
// Create new array
// ==================
const number = [1, 2, 3, 4, 5]
const multipleNumber = number.map((x) => {
  return x * 2
})

console.log(multipleNumber) // [ 2, 4, 6, 8, 10 ]

// check is array?
console.log(Array.isArray(multipleNumber))    // true
console.log(Array.isArray(12))                // false


// ==============================
// More Simple Code using `map()`
// ==============================
const number2 = [1, 2, 5]
const plusTwo = number2.map( i => i + 2 )
console.log(plusTwo) // [3, 4, 7]