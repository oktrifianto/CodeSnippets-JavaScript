/**
 * Check Palindrome String
 * @param     {string} value
 * @return    {boolean}
 */

const isPalindrome = val => {
  const NewValue = val.toLowerCase().replace(/\s/g, "");

  let stack = [];
  for (let i = 0; i < NewValue.length; i++){
    stack.push(NewValue[i]);
  }

  // take out
  let reverseValue = ''; // init string
  while (stack.length > 0){
    reverseValue += stack.pop();
  }

  return (reverseValue === NewValue) ? true : false;
  
  // only checking
  /*
  return reverseValue
    .toLowerCase()
    .replace(/\s/g, "") + " - "+ val.toLowerCase().replace(/\s/g, ""); 
  */
}

console.log(isPalindrome('alula')); // true
console.log(isPalindrome('Anna')); // true  // string must be lowercase
console.log(isPalindrome('Air an Aria')); // should be `true` // remove all whitespace
console.log(isPalindrome('asjadjbabj')); // must false