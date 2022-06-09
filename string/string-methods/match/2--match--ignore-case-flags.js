// Using global and ignore case flags

const str   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regex = /[A-E]/gi; // global & ignore case
const matches_array = str.match(regex);

console.log(matches_array);
/*
[
  'A', 'B', 'C', 'D',
  'E', 'a', 'b', 'c',
  'd', 'e'
]
*/