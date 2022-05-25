// Find an object in an array by one

// inventories data
const data = [
  { name : 'apples', qty : 2 }, 
  { name : 'bananas', qty : 1 },
  { name : 'citrus', qty : 10}
];

// we will find `bananas` 
function isBananas(f) {
  return f.name === 'bananas';
}

console.log(data.find(isBananas));
// { name: 'bananas', qty: 1 }