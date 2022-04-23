// ---------------------------
// More example `every` method
// ---------------------------
// > tests wheters all elements in the array are smaller than 20

const isSmallEnough = (el, index, array) => {
  return el <= 20;
}

console.log([1, 4, 5, 6].every(isSmallEnough));    // true
console.log([1, 4, 59, 89].every(isSmallEnough));  // false