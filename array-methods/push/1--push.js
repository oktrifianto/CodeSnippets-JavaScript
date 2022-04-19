/** --------------
 * `push()` method
 * ---------------
 * @description
 *    adds one or more elements to the end of an array 
 *    returns the new length of the array
 * @syntax
 *    push(element0)
 *    push(element0, element1)
 *    push(element0, element1, ..., elementN)
 */

const colors = ['red', 'blue', 'yellow'];
console.log(colors);
// [ 'red', 'blue', 'yellow' ]

/* ---------------------------- */
// add one element
console.log(colors.push('white')); // print with push // will print total data
// 4 // return new length
console.log(colors);
// [ 'red', 'blue', 'yellow', 'white' ]
console.log(colors.length);
// 4 

colors.push('black');
console.log(colors);
// [ 'red', 'blue', 'yellow', 'white', 'black' ]

