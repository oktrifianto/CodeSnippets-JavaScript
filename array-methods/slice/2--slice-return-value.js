// Return a portion of an existing array //
// ------------------------------------- //
let animals = ['Dog', 'Kitten', 'Duck', 'Pigeon', 'Chicken', 'Pig'];
//              0       1         2       3           4        5

let birds = animals.slice(2, 5);
console.log(birds);
// [ 'Duck', 'Pigeon', 'Chicken' ]