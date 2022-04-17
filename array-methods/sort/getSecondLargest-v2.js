/**
 * Get Second Largest Number From Array
 * @param   {Array} nums 
 * @return  {number}
 * @improve
 * - using Set method (ES6)
 */
const getSecondLargest = nums => {
  if (nums.length < 3) return `Please more data array number!`;
  nums.sort((a, b) => a - b);
  const unique_nums = [...new Set(nums)];
  return unique_nums[unique_nums.length - 2];
}

console.log(getSecondLargest([12, 42, 43, 82, 38])); // 43 (√)
console.log(getSecondLargest([54, 21, 56, 23, 12])); // 54 (√)
console.log(getSecondLargest([12, 34])); 
console.log(getSecondLargest([2, 3, 6, 6, 5])); // 5 (√)