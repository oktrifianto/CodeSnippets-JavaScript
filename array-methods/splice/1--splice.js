/** ----------------------
 * Method `splice()` in JS
 * -----------------------
 * 
 * @description
 *    > method changes the contents of an array by removing or replacing existing elements 
 *        and/or adding new elements in place.
 *    > splice method ==> will changes the original array
 * 
 * @syntax
 *    splice(start)
 *    splice(start, deleteCount)
 *    splice(start, deleteCount, item)
 *    splice(start, deleteCount, item1, item2, itemN...)
 */

const animals = ['chicken', 'bird', 'tiger'];
// index :          0         1        2
animals.splice(1, 0, 'duck'); // insert at index 1

console.log(animals);
// [ 'chicken', 'duck', 'bird', 'tiger' ]