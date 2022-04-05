/** 
 * ========
 * For Loop
 */
const data = [1, 2, 3, 4, 5];
for ( let i = 0; i < data.length; i++ ){
  console.log(data[i]);
}

// result
/*

1
2
3
4
5

*/

// ==================
// Sum using for loop
// ==================
const my_data = [12, 34, 23, 38];
let sum = 0;
for (let i = 0; i < my_data.length; i++){
  sum += my_data[i];
}

console.log(sum); // 107