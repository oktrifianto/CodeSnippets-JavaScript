/** ----------------
 * `concat()` method
 * -----------------
 * 
 * @description
 *    > used to merge two or more arrays
 *    > this method does not change the existing arrays
 *    > returns a new array
 * 
 * @syntax 
 *    concat()
 *    concat(value0)
 *    concat(value0, value1)
 *    concat(value0, value1, ..., valueN)
 * 
 */

const xa = ['a', 'b', 'c'];
const xb = ['d', 'e', 'f'];
const xc = xa.concat(xb);

console.log(xc);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]