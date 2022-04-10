/**
 * `hasOwnProperty`
 * ===============
 * method return a boolean that indicating whether the object has the specified property
 */
const my_object = {};
my_object.propertyeheheee = 100;
my_object.awesomeproperty = 'Awesome';

console.log(my_object.hasOwnProperty('propertyeheheee'));
// true

console.log(my_object.hasOwnProperty('toString'));
// false

console.log(my_object.hasOwnProperty('awesomeproperty'));
// true

