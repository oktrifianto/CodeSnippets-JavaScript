/**
 * Sum of Array Data using `reduce` method
 * @param {array} x - array from data
 */
const sumOfNumber = x => x.reduce((a, c) => a + c, 0);

console.log(sumOfNumber([1, 2, 3, 4])); // 10
console.log(sumOfNumber([2, 4, 5, 2])); // 13
console.log(sumOfNumber([20, 10, 30, 70])); // 130