// let and const


// 1. 
// The difference b/w let and var is let is block scope
// block scope simply means inside braces {}

if(true){
    let a =10;
    var b =10;
}

//console.log("a: " + a + "b: " + b);
// here a will throw Uncaught ReferenceError: a is not defined



// 2.
// Let's checkout one more scenario i function 

function hello(){
    let c =10;
    var d =10;
}

//console.log("c: " + c + "d: " + d);
// here both let and var will be Uncaught ReferenceError: c is not defined
// as both have function scope



// 3.
// One more scenario, if I use a var/let before it's been declared


firstVar = 10;
FourthVar = 20;


var firstVar;
let FourthVar = 90;

//console.log("firstVar: " + firstVar + "FourthVar: " + FourthVar);
// will get error Uncaught ReferenceError: Cannot access 'FourthVar' before initialization


// ----------------------------------------------------------------------------------------------------------------------------------------

// Const keyword

// As the name suggest constant, it can not be changed once assigned;

const firstName = 'Sandeep';
console.log(firstName);
//firstName = 'Mahesh'; // here it will throw error "TypeError: Assignment to constant variable.



// But this is not the case with object/array

const person = { firstName: 'Sandeep', lastName: 'Kumar' };
console.log(person);
person.firstName = 'Mahesh';
console.log(person);

// as array and object are reference type data type, const only store the reference value not the assigned value
// and reference value are not changed so  these can be changed in same manner as with var



