/**
 * Get Second Largest v1
 * @param     {Array} nums 
 * @returns   number
 */
const gsl = nums => {
  if (nums.length < 3) return 'Cannot compare!';
  nums.sort((a, b) => a - b ); // filter sort from small
  return nums[nums.length - 2]; // get array from behind
}

console.log(gsl([12, 42, 43, 82, 38])); // 43 (√)
console.log(gsl([54, 21, 56, 23, 12])); // 54 (√)
console.log(gsl([12, 34])); 

// need to fix?
// if double value
console.log(gsl([2, 3, 6, 6, 5])); // failed... output: 6 ... should be 5
// CLUE: filter to unique array
// see : https://stackoverflow.com/questions/38206915/filter-array-to-have-unique-values