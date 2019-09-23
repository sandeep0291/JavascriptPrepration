
// Destructuring

// 1. 
// Pulling out array elments as variables, see example below

let numArray = [10,20,30];
let [a,b] = numArray;

console.log("a: " + a + " b: " + b);

// If I do like below

let [a, ,b] = numArray;
// then second element will be skipped and b will be 30
// Note: but this will not work the same with objects


// If I add more variable than an array has then?
let [a,b,c,d] = numArray; // here d will be undefined



// 2.
// rest operator can be used here to get rest of the elements as array

let [a,...b] = numArray; // here b will be array of [20,30]


// 3. 
// Default value can be assigned to an variable 
let [a='Default', b, c, d='Default'] = numArray; 
// here a will be 10 only because it has a value, Default value only be assigned when there is undefined or no value passed.


// 4.
// It can be used to swap also

let [a,b] = [b,a]


// --------------------------------------------------------------------------------------------------------------------------------------------

// Uses of Destructuring in objects

let personObject = { name: 'Sandeep', lastname: 'Kumar', address: 'Pune' };

let [name, lastname] = personObject;

console.log('Name: ' + name + ' LastName: ' + lastname);

// Here tricky thing is you can not skip and expect to work like array

let [name, , lastname] = personObject;  // this will throw an error here, Syntax error: Unexpected token ,
