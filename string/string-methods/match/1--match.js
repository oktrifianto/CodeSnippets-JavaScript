/** --------------------
 * `match` in JavaScript
 * ---------------------
 * 
 * @description
 *    retrieves the result of matching a string against a regex
 * 
 * @syntax
 *    match(regexp)
 */

const p = "Hello World, how are you?";
const regex = /[A-Z]/g;
const found = p.match(regex);

console.log(found); // [ 'H', 'W' ]