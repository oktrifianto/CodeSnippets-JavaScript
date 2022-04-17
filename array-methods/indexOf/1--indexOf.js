/**
 * ------------------------------
 * `indexOf()` method in JavaScript
 * ------------------------------
 * this method returns the first index at which a given element can be found in array
 * if not present will return (-1)
 * 
 * ------------------------------
 * @syntax
 *    indexOf(searchMyElement)
 *    indexOf(searchMyElement, fromIndex)
 * 
 * @see   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */

// example create array
const pets = ['duck', 'chicken', 'cat', 'dog', 'betta fish'];

// console.log(pets);
// output: [ 'duck', 'chicken', 'cat', 'dog', 'betta fish' ]
// index : [    0  ,   1      ,   2   ,  3  ,       4      ]
/**
 * negative index:
 *         [    -5 ,   -4     ,   -3  ,  -2 ,       -1     ]
 */

console.log(pets.indexOf('cat'));  // will get index-2
// output: 2

console.log(pets.indexOf('cat', 2)); // start from index-2 [`cat`] - include
// output: 2

console.log(pets.indexOf('dog', 2)); // start from index-2 [`cat`] - will get index-3 [`dog`]
// output: 3

console.log(pets.indexOf('lion'));  // not found will return -1
// output: -1


console.log(pets[-2]); // undefined

console.log(pets.indexOf('dog', -4));  // start from index (-4)
// output: 3