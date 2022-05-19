/** -------------------------
 * `slice()` method in JS
 * --------------------------
 * @description
 *    > return a shallow copy of portion of an array into new array object
 *    > selected from start to end
 *        (end --- not included)
 *    > original array will not be modified.
 * 
 * @syntax
 *    slice()
 *    slice(start)
 *    slice(start, end)
 */

const birds = ['auk', 'dove', 'duck', 'falcon', 'hawk'];
        //     0        1       2         3       4

console.log(birds);
// [ 'auk', 'dove', 'duck', 'falcon', 'hawk' ]

console.log(birds.slice(2)); // from array 2 to `end`
// [ 'duck', 'falcon', 'hawk' ]

console.log(birds.slice(2, 4)); // from array 2 to 4 (array number 4 not included)
// [ 'duck', 'falcon' ]

console.log(birds.slice(1, 8)); // from array 2 - 8 --- array 8 not exist
// [ 'dove', 'duck', 'falcon', 'hawk' ]

console.log(birds.slice(2, birds.length));
// [ 'duck', 'falcon', 'hawk' ]

console.log(birds.slice(-2)); // negative index
// [ 'falcon', 'hawk' ]

console.log(birds.slice()); // not changed with original array
// [ 'auk', 'dove', 'duck', 'falcon', 'hawk' ]