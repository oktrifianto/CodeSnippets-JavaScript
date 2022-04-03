/** =======================
 * `for ... of` ––– looping
 * @see   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 * Creates a loop iterating over iterable object
 */
const number = [10, 21, 4, 5]

for (const x of number)
  console.log(x)

/*
------
result
------
10
21
4
5
*/


// ========================
const data = [10, 20, 30];
for (const value of data){
  console.log(value);
}

// result
/*
10
20
30
*/


// ========================
// Using `let`
// using let instead const
// if reassign variable inside the block
const myData = [30, 40, 50];
for (let i of myData){
  i += 2;
  console.log(i);
}

// result
/*

32
42
52

*/