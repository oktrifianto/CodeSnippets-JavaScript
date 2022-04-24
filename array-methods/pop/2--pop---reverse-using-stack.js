/**
 * Reverse string using stack
 * @param   {string} s 
 * @return  {string}
 */
const rv = s => {
  let stack = []; // init array

  // put into stack
  for (let i = 0; i < s.length;i++)
    stack.push(s[i]);

  // take out from stack
  let reverseString = ''; // init reverse string
  while (stack.length > 0)
    reverseString += stack.pop();

  return reverseString;
}

console.log(rv('Hello World')); // dlroW olleH
console.log(rv('oeoeo')); // oeoeo
console.log(rv('samsung')); // gnusmas