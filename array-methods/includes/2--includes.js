/* ---- More example of includes ---- */
let arr = [1, 2, 3];
console.info(arr);
console.log(arr);

// ---------
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
console.log(arr.includes(3, 3)); // false, because search '3' start from index 3 ==> not found

console.log(arr.includes(3, -1)); // true, negative index... start -1 ... is found

let arr_2 = [1, NaN, 3];
console.log(arr_2.includes(NaN)); // true

console.log(["1", "2", "3"].includes(3)); // false, because array using string

/* -------- fromIndex ------ */
// fromIndex... is greather than or equal to array length

let arr_3 = ['a', 'b', 'c'];

console.log(arr_3.includes('c', 1)); // true
console.log(arr_3.includes('c', 3)); // false
console.log(arr_3.includes('c', 100)); // false