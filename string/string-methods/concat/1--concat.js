/** -------------
 * `concat()`
 * --------------
 * 
 * @description
 *    concatenates the string arguments to the calling string
 *    returns a new string
 * 
 * @syntax
 *    concat(string1
 *    concat(string1, string2)
 *    concat(string1, string2, ..., stringN)
 */

const string1 = 'Hi';
const string2 = 'John';

console.log(string1.concat(' ', string2));
// Hi John

console.log(string1.concat(', ', string2));
// Hi, John