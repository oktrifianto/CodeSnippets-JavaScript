/** -----------------------
 * `unshift()` method in JS
 * ------------------------
 * @description
 *    > *(adds)* one or more elements to the beginning of an array
 *    > return the new length of the array
 * 
 * @syntax
 *    unshift(element0)
 *    unshift(element0, element1)
 *    unshift(element0, element1, ..., element-N)
 */

// init data
let data = [4, 5, 6];
console.log(data);
// [ 4, 5, 6 ]

// add elements in front of array
data.unshift(2, 2, 4);
console.log(data);
// [ 2, 2, 4, 4, 5, 6 ]