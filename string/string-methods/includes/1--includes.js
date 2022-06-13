/** ------------------------
 * `includes()` method in JS
 * -------------------------
 * @description
 *    performs a case-sensitive search to determine whether one string
 *    may be found within another string
 * 
 * @return 
 *    true or false
 */
const a = 'It is a white bird';

const word = 'white';

console.log(a.includes('white')); // true
console.log(a.includes('black')); // false

console.log(`The word ${word} ${a.includes(word) ? 'is' : 'is not'} in the sentence.`);
