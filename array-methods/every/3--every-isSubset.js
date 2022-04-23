// ----------------------------------------------------
// Check if One array is a subset of another array
// ----------------------------------------------------
// What is subset? https://www.onlinemathlearning.com/image-files/subset.png


// check is subset
const isSubset = (arrayA, arrayB) => arrayB.every(el => {
  return arrayA.includes(el);
});

console.log(isSubset([1, 2, 3, 4, 5, 6], [2, 3]));  // true
console.log(isSubset([4, 56, 77, 74], [56]));       // true
console.log(isSubset([3, 4, 5, 6], [45]));          // false 
