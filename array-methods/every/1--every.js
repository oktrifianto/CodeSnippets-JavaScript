/** –––––––––––––––––––––
 * `every()` method in JS
 * ––––––––––––––––––––––
 * @description
 *    > tests whether all elements in the array pass the implemented by provided function
 *    > return boolean
 */

// test values are less than 50
const isBelow = (currentVal) => currentVal < 50;

const data = [1, 3, 4, 20, 45];

console.log(data.every(isBelow)); 
// true