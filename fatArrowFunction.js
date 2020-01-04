// FAT arrow function


// 1.
// syntax of fat arrow function

var hello = (args) => {
  console.log("Fat arrow function");
}

hello();


// 2.
// Second way of using fat arrow function
// when we have only ONE arg then we can omit brackets like below

var helloWithOneArgument = name => {
  
  console.log("Hello: " + name);
};

helloWithOneArgument("Sandeep");


// 3.
// Even we can remove function defination curly braces {} if we have just one line there

var helloWithOneLineDefintation = name => console.log("Hello: " + name);
helloWithOneLineDefintation("Sandeep");

// 4.
// If there is only one line with return then no need to even type return also
// see below a+b without any return infront of it
// but remember you can not use this thing like this { a+b; } even if you have 
// single line inside braces {}

var addTwoNumbers = (a,b) => a+b;
console.log( addTwoNumbers(2,4) );


// -------------------------------------------------------------------------------
// THIS -- this behaves differently inside fat arrow
// It takes this with Lexical scope -- Lexical means where the defination was written


// below this is refering to global object
var name = 'Sandeep';
var helloThis = () =>{
    console.log("PrintName from FatArrow: " + this.name);
}

var helloThisWitoutFatArrow = function(){
    console.log("PrintName from Normal Function: " + this.name);
};

// so even when i call this with some other object it still refers to global object
// only as it will take Lexical scope


var obj = {name: 'Rakesh'}
helloThis.call(obj); // this will still print Sandeep as FatArrow has lexical scoping
helloThisWitoutFatArrow.call(obj); //  this will print Rakesh, as this has changed by obj from call


// NOTE . 

// An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. 
// These function are best suited for non-method functions, and they cannot be used as constructors.
