/** ----------------
 * `concat()` method
 * -----------------
 * 
 * @description
 *    > used to merge two or more arrays
 *    > this method does not change the existing arrays
 *    > returns a new array
 * 
 * @syntax 
 *    concat()
 *    concat(value0)
 *    concat(value0, value1)
 *    concat(value0, value1, ..., valueN)
 * 
 */

const xa = ['a', 'b', 'c'];
const xb = ['d', 'e', 'f'];
const xc = xa.concat(xb);

console.log(xc);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// -------------------------------- //
// More example... concatenating two arrays
const l = ['a', 'b', 'c'];
const n = [1, 2, 3];

const alphaNumeric = l.concat(n);
console.log(alphaNumeric); // [ 'a', 'b', 'c', 1, 2, 3 ]


// -------------------------------- //
// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numX = num1.concat(num3, num2);

console.log(numX);