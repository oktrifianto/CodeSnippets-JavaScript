/**
 * `sort()` method
 * ===============
 * - sorts the element of an array and returns the sorted array.
 * - default sort is ascending
 * - converting the elements into strings
 * @see   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

// Sort by String
const employeeName = ['Mely', 'John', 'Fety', 'Deno']
employeeName.sort()
console.log(employeeName);
// output: [ 'Deno', 'Fety', 'John', 'Mely' ]


// Sort Number?
const number1 = [1, 300, 1000, 232, 83, 87];
number1.sort();
console.log(number1);
// output: [ 1, 1000, 232, 300, 83, 87 ] --- why not 1, 232, ... ?
// because convert to string


// Sort Number
const number2 = [1, 300, 1000, 232, 83, 87];
number2.sort((a, b) => a - b );
console.log(number2);
// output: [ 1, 83, 87, 232, 300, 1000 ]