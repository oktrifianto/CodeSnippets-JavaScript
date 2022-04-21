// More example of `unshift`
let my_array = [4, 5, 6];

my_array.unshift(1, 2, 3);
console.log(my_array);
// [ 1, 2, 3, 4, 5, 6 ]


/* ------------------------ */
// reset array
my_array = [4, 5, 6];
console.log(my_array);
// [ 4, 5, 6 ]

my_array.unshift(1);
my_array.unshift(2);
my_array.unshift(3);

console.log(my_array);
// [ 3, 2, 1, 4, 5, 6 ]