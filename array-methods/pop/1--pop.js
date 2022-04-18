/** --------------------
 * `pop` method in Array
 * ---------------------
 * @description
 *    removes the last element from an array & return that element
 *    this method will change array length
 * @syntax
 *    pop()
 * 
 */
const drinks = ['milk', 'tea', 'water'];
console.log(drinks);
// [ 'milk', 'tea', 'water' ]

console.log(drinks.pop()); // remove last element & print this element
// water

console.log(drinks);
// [ 'milk', 'tea' ]

drinks.pop(); // remove last element

console.log(drinks);
// ['milk']

