/** ---------------
 * Function.length
 * ----------------
 * 
 * @description
 * `length` property -> number of parameters expected by the function
 * 
 */

/* ------- Examples ------- */

// 1
function myFun1() {
  return 0;
}

console.log(myFun1.length); // 0


// 2 
function myFun2(a, b) {
  return a + b;
}

console.log(myFun2.length); // 2


// 3
function myFun3(a, b, x) {
  if (x !== 0){
    return a + b;
  }
  return x;
}

console.log(myFun3.length); // 3


// 4 === using arrow function
const my_arrow_fun = (a, b, c) => a + b + c;
console.log(`Length of function is ${my_arrow_fun.length}`); // 3