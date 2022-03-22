/**
 * @description   Return example in the function JS
 * @param         val (int)
 * @return        (int) 
 */
const multiTwo = val => {
  if (val != 3){
    return val * 3;
  }
  return val;
}

console.log(multiTwo(2)); // 2 * 3 = 6
console.log(multiTwo(3)); // 3 // only 3
console.log(multiTwo(4)); // 12

