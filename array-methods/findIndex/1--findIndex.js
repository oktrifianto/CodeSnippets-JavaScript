/** -----------------
 * findIndex() method
 * ------------------
 * 
 * @description
 *    - return the index of the first element in the array
 *    - return -1 --> that no element passed in the array
 */

const my_array =  [2, 30, 38, 127, 10];
// index number    0   1   2    3    4

const found = my_array.findIndex(el => el > 30);

console.log(found); // 2 <--- array number 2