// --------------------------------- //
// Concatenating values to an array
const l = ['a', 'b', 'c'];
const al = l.concat(1, ['tiger', 'lion']);
console.log(al);
// [ 'a', 'b', 'c', 1, 'tiger', 'lion' ]


// --------------------------------- //
// Test nested array
let b =[[1]];
console.log(b); // [ [ 1 ] ]

// --------------------------------- //
// Concatenating nested arrays
const num1 = [[1]];
const num2 = [2, [3]];

console.log('v0: ' + num1[0]); // v0: 1

const num = num1.concat(num2);

console.log(num); // [ [ 1 ], 2, [ 3 ] ]

num1[0].push(5); // modify the first element of num1
console.log('v1: ' + num1);

console.log(num); // [ [ 1, 5 ], 2, [ 3 ] ]

console.log('v2: ' + num1);

// accessing nested array
console.log('num1: ' + num1[0][0] + ', num1 : ' + num1[0][1]); // num1: 1, num1 : 5