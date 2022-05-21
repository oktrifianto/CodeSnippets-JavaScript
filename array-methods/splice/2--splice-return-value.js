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