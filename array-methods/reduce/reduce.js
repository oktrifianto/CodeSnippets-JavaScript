/**
 * @description Reduce in JavaScript
 * @see         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * @see         https://www.youtube.com/watch?v=g1C40tDP0Bk
 */

// init array
const number = [1, 23, 24, 73, 84];

/**
 * =====================================
 * Simple Algorithm To Calculate Number 
 * - using `for loop` & init from 0
 */
let sum = 0
for (let i = 0; i < number.length; i++)
  sum += number[i]
console.log(sum) // 205


/**
 * =====================================
 * Calculate number
 * - using `reduce()` method
 * @param a   -> previous value
 * @param c   -> current value
 */
const initValue = 0
const sumWithReduce = number.reduce((a, c) => {
  return a + c
}, initValue)
console.log(sumWithReduce) // 205


// ===================
// More simple reduce
// ===================
const simpleReduce = number.reduce((a, c) => a + c, 0)
console.log(simpleReduce) // 205