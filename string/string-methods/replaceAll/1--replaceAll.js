/** ----------------------------
 * `replaceAll()` in JS string
 * -----------------------------
 * 
 * @description
 *    returns a new string with all matches of a pattern replaced by a replacement
 * 
 * @syntax
 *    replaceAll(regexp, newSubstr)
 *    replaceAll(regexp, replacerFunction)
 * 
 *    replaceAll(substr, newSubstr)
 *    replaceAll(substr, replacerFunction)
 * 
 */
const s = 'Hello ferret! The ferret is black.';
console.log(s.replaceAll('ferret', 'dog'));
// output: Hello dog! The dog is black