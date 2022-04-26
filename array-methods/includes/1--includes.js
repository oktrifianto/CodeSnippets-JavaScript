/** -------------------------
 * `includes()` method in JS
 * --------------------------
 * @description
 *    method determines whether an array includes a certain value among its entries
 *    like... it is value from array exist or not  
 *  
 * @return {boolean}
 *    true or false
 * 
 * @syntax
 *    includes(searchElement)
 *    includes(searchElement, fromIndex)
 *    ------------
 *    nb: if searchElement from fromIndex not found => false
 * 
 */

/* ------------ Example ----------- */
const data_array = [1, 2, 3];
console.log(data_array.includes(2)); // true
// true : because `2` is exist in the array

console.log(data_array.includes(5)); // false
// false : because `5` is not exist in the array