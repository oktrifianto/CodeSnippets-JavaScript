const data = [
  { name: "cow", qty: 2},
  { name: "cat", qty: 9},
  { name: "dog", qty: 3}  
];

const result = data.find( ({ name }) => name === 'dog');

console.log(result); // { name: 'dog', qty: 3 }