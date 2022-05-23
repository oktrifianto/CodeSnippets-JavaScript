/** --------------
 *  find() method 
 * ---------------
 * 
 * @description
 *    - returns first element in the provided array
 *    - if no values == returned `undefined`
 */
const my_array =  [2, 30, 38, 127, 10];

const found = my_array.find((el) => {
  return el > 30;
});

console.log(found); // 38