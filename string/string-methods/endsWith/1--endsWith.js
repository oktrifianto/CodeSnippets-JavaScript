/** -------------------
 * `endsWith()` method
 * --------------------
 * @description
 *  determines whether a string ends with the characters of a specified string
 *  returning true or false
 * 
 * @syntax
 *    endsWith(searchString)
 *    endsWith(searchString, length)
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 */

const cat = 'The cat is white!';
//          0   -------------16-17 ----------

console.log(cat.endsWith('white'));
// false

console.log(cat.endsWith('white!'));
// true

console.log(cat.endsWith('white', 16));
// true