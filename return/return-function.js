/**
 * @description   Return example in the function JS (ES6)
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
console.log(multiTwo(3)); // 3 // keep 3
console.log(multiTwo(4)); // 4 * 3 = 12

////////////////////////////////////////////////////
/**
 * @description   More handling return function (ES5)
 * @param         {*} val 
 * @returns       val
 */
function multiFour(val) {
  if (val != 4) return val * 4;
  return val;
}

console.log(multiFour(2)); // 2 * 4 = 8
console.log(multiFour(4)); // keep 4
console.log(multiFour(6)); // 6 * 4 = 24
