/**
 * Return `undefined` if array empty
 */

let data = [1, 2, 3];
data.shift();
console.log(data);
// [ 1, 2, 3 ]

data = []; // empty array
console.log(data.shift()); // undefined
console.log(data); // []