// Assign in variable //// ---------------------

/* ------------------------------------------
  --- Return value ---

  an array containing the deleted elements
  if only one el is removed, an array of one element is returned
  if no elements removed, an empty array is returned

------------------------------------------ */

let fishes1 = ['piranha', 'eel', 'louhan', 'lobster'];
let removed1 = fishes1.splice(2, 0, 'carp');
console.log(removed1); // returned [], because no element removed
console.log(fishes1); 
// [ 'piranha', 'eel', 'carp', 'louhan', 'lobster' ]


// --------- remove 1 element at index 3 -------
console.log('---------------------------------------');
let fishes2 = ['piranha', 'eel', 'louhan', 'lobster'];
let removed2 = fishes2.splice(3, 1);
console.log(removed2); // [ 'lobster' ]


// --------- remove 1 element at index 2, and insert one new element
console.log('---------------------------------------');
let fishes3 = ['piranha', 'eel', 'louhan', 'lobster'];
let removed3 = fishes3.splice(2, 1, 'catfish');
console.log(removed3); // [ 'louhan' ]
console.log(fishes3);  // [ 'piranha', 'eel', 'catfish', 'lobster' ]

// --------- remove 2 element at index 2, and insert one element
console.log('---------------------------------------');
let fishes4   = ['piranha', 'eel', 'louhan', 'lobster'];
let removed4  = fishes4.splice(2, 2, 'catfish');
console.log(removed4); // [ 'louhan', 'lobster' ]
console.log(fishes4);  // [ 'piranha', 'eel', 'catfish' ]

// remove 1 element from index -2 ---- negative index
console.log('---------------------------------------');
let fishes5   = ['piranha', 'eel', 'louhan', 'lobster'];
let removed5  = fishes5.splice(-2, 1);
console.log(removed5); // [ 'louhan' ]
console.log(fishes5);  // [ 'piranha', 'eel', 'lobster' ]

// remove all element, starting from index 2
console.log('---------------------------------------');
let fishes6   = ['piranha', 'eel', 'louhan', 'lobster', 'catfish'];
let removed6  = fishes6.splice(2);
console.log(removed6); // [ 'louhan', 'lobster', 'catfish' ]