/**
 * Merge two array using spread operator
 * - push all elements from a second array into the first one
 */
let currencies      = ['dollar', 'euro'];
let nextCurrencies  = ['yuan', 'zloty'];

// merge array using push method & spread operator
currencies.push(...nextCurrencies); 

console.log(currencies);
// [ 'dollar', 'euro', 'yuan', 'zloty' ]