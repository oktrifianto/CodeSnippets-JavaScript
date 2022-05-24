/** --------------
 *  find() method 
 * ---------------
 * 
 * @description
 *    - returns first element in the provided array
 *    - if no values == returned `undefined`
 * 
 * @syntax
 *    // arrow function
 *    find((el) => {...})
 *    find((el, index) => {...})
 *    find((el, index, array) => {...})
 * 
 *    // callback function
 *    find(callbackFn)
 *    find(callbackFn, thisArg)
 * 
 *    // inline callback function
 *    find(function(el) {...})
 *    find(function(el, index) {...})
 *    find(function(el, index, array) {...})
 *    find(function(el, index, array) {...}, thisArg)
 */
const my_array =  [2, 30, 38, 127, 10];

const found = my_array.find((el) => {
  return el > 30;
});

console.log(found); // 38