/** ==============================
 * @description `filter()` method JavaScript
 *              Creates a new array with all elements that pass the test implemented by function
 * @see         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * 
 */

const fruits = ['apple', 'banana', 'orange', 'chocholate', 'grape'];
const result = fruits.filter((x) => {
  return x.length > 5;
});

console.log(result);  //  [ 'banana', 'orange', 'chocholate' ]