/** ------------------------
 * `Array.isArray()` method
 * -------------------------
 * determines whether the passed value is an Array
 * -------------------------
 * @syntax
 *    Array.isArray(value)
 * @return
 *    true  => if the value is an Array
 *    false => otherwise
 */

const res = Array.isArray([12, 3, 45]); 
console.log(res); // true

console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray(9)); // number <- not array
// false

console.log(Array.isArray({name : 'John'}));
// false

console.log(Array.isArray(undefined));
// false

console.log(Array.isArray('test')); // string <- not array
// output: false

console.log(Array.isArray([]));
// output: true

/** --------------------------
 * Test Another Implementation
 */
// const data = [1, 2, 3, 4]; // array
const data = 1; // number
if (Array.isArray(data)){
  console.log("Welcome!");
} else {
  console.log("Hmmm... not bad!");
}