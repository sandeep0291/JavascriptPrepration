// Objects ***************
// 1. How to clone objects
// 2. how to deep clone objects
// 3. How to merge objects
// 4. What is object.assign()
// 5. What is Object.keys and where it's useful
// 6. What is enumerable property means
// 7. What is the difference b/w Object.assign and Object.create


// OOPS *********************
// 1. What is __proto__
// 2. Difference b/w prototype and __proto__
// 3. What is a constructor function and factory function
// 5. Inheritance in javascript
// 6. Singleton Pattern
// 7. PubSub Pattern
// 8. Modular Pattern
// 9. Prototype Pattern


// Core Fundamental Question:
// 1. What is Hoisting.
// 2. What is a Closure.
// 3. Prototype Chaining
// 4. What is Lexical Scope


// Random *******************
// 1. Currying
// 2. Memonization
// 3. Functional Programming
// 4. Higher Order Functions
// 5. Compose and pipe




// *************************************************************************************************************************
// *********************************************Objects Answers ************************************************************
// *************************************************************************************************************************


// ***********  Answer of 1. How to clone Objects *******************  @Sandeep Kumar
var aObj = { a: 10, b: 10 };
// first method is with Object.assign method
var copy = Object.assign({}, aObj);

// second is with spread operator
var copyWithSpreadOperator = {...aObj};

// Note: copying an object is fine till it's a simple object of key value pair
// means value should not be an object or reference type of object like
var x =  {  a: 1, b: { c:2 } }   //here b is a reference type
// so if you copy like above
var xCopy = Object.assign({}, aObj);
// then if you set reference value like this
xCopy.b.c = 10;
// then this will change both object x and xCopy will be 10 here as c is referenced type
// Above problem is said to be Shallow Copy

// To solve this issue, we call it Deep Clone/Copy
// So this answer 2nd question also


// ***********  Answer of 2. how to deep clone objects *******************  @Sandeep Kumar

var xCopy = JSON.parse(JSON.stringify(x));
// the trick here is that you are converting object to string, so it lost it's reference and simply converted to an string
// and JSON.parse again convert this to an object.
// now you change a reference value then it will change only that particular object either copy or original



// ***********  Answer of 3. How to merge objects *******************  @Sandeep Kumar

// merging objects can be achieved by Object.assign method only

var first = { a:1 };
var second = { b:1 };
var third = { c:1 };

var mergeThem = Object.assign(first,second,third);
console.log(mergeThem);  // { a:1, b:2, c:3 }
// remember this will change first object also i.e target here
// if you don't want this, then you can pass empty objects in first param like below
var mergeThem = Object.assign({}, first, second, third);

// also remember if an object has same key then it's value will be altered by latter one
// here what I mean
var first = { a: 1, b:2};
var second= { a:10, b:20 };
var mergeThem = Object.assign(first,second);
console.log(mergeThem); // {a: 10, b: 20}



// ***********  Answer of 4. What is object.assign() *******************  @Sandeep Kumar

// This method is used to copy/merge objects as explained above, Please note this only does shallow copy as mentioned above
// For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



// ***********  Answer of 5. What is Object.keys and where it's useful *******************  @Sandeep Kumar

// Object.keys are used to iterate over object own enumerable property
// above *own* means direct property and not like below
var hello = { a: 1, b: { c: 2 }, d: 4 }
console.log(Object.keys(hello));  // ["a", "b", "d"]
// see above c will not iterate over, as it will iterate only over direct own property of an object
Object.keys(hello).forEach(function(key){ 
    console.log(hello[key]); // 1 // will give the value
})
// Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. 
//The ordering of the properties is the same as that given by looping over the properties of the object manually.



// ***********  Answer of 7. What is enumerable property means *******************  @Sandeep Kumar

// Enumerable basically a  property on an object, if it's set to false, for in and foreach loops will ignore that
// Like if you check an an array it has property of length, but for in/ forEach loop ignores it
// those property can been seen with Object.getOwnPropertyNames
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); 
// logs ["0", "1", "2", "length"] // and for-loop it's(length) ignored


// how to set property to non-enmuerable, ex below
var person = { age: 30 }
Object.defineProperty(person, 'name', { value: 'Joshua', enumerable: false }); // now name will not be same when iterate in for loop/For Each


//  ***********  Answer of 7.  What is the difference b/w Object.assign and Object.create *******************  @Sandeep Kumar

// Object.create is used to create new object with a existing object as the prototype of the newly created object.
// but assign method creates a copy / clone of the existing object, Object.create() is used in inheritance implementation 
// For more Info:  https://www.codecalls.com/2020/02/02/difference-between-object-create-and-object-assign/


// *************************************************************************************************************************
// *********************************************OOPS Answers ***************************************************************
// *************************************************************************************************************************


// ***********  Answer of  1. What is __proto_ *******************  @Sandeep Kumar

// __proto__ is the actual object that is used to lookup prototype chain methods, every object have __proto__ which points
// to it's parent prototype 

function Person(){
    this.name = 'Sandeep';
}

Person.prototype.age = 12;

var a = new Person();

// now a can access a.age with __proto__ internally pointing to Person prototype
// check this on console a.__proto__  this will show  {age: 12, constructor: ƒ}
// a.__proto__.__proto__ will give you actual Object()
// a.__proto__.__proto__.__proto__  this will give you null as Object constructor doesn't point to anything

// __proto__ is also attached to a Function contructor which points to function native code ƒ () { [native code] }
// with this it access length call apply bind function, as you can see function constructor above itself don't have 
// those property


// ***********  Answer of  2. Difference b/w prototype and __proto___ *******************  @Sandeep Kumar

// prototype are attached to function not Object, with __proto__ internally an object instance access prototype methods or properties
//  It is used to build __proto__ when the function happens to be used as a constructor with the new keyword
// for more refer here: https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript


// ***********  Answer of  3. What is a constructor function and factory function *******************  @Sandeep Kumar

// constructor function are used to create new objects with 'new' keyword called function

function Person(name, lastName){
   this.name = name;
   this.lastName = lastName;
}

Person.prototype.fullName = function(){
  return this.name + ' ' + this.lastName;
}

var a = new Person('Sandeep', 'Kumar');

a.fullName(); // Sandeep Kumar


// Factory function are also used to create new objects without using new keyword

function helloWorld(){
  return {
    a: 'Hello',
    b: 'World',
    print: function(){
         return this.a + ' ' + this.b;
    }
  }
}

var b = helloWorld();
b.print();


// here to improve efficiency print function can be written

var common = {
    print: function(){
         return this.a + ' ' + this.b;
    }
}

function helloWorld(){
  var hey = Object.create(common); // this creates prototype 
}
var c = helloWorld();
c.print();



// ***********  Answer of  5. Inheritance in javascript *******************  @Sandeep Kumar
function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}


function Dog (name, energy, breed) {
  Animal.call(this, name, energy); 
    // .call() is a method on every function that allows you to invoke the function specifying 
    // in what context the function will be invoked.
    // here this is Dog context, now Dog will have Anima

  this.breed = breed
}

// Now how we get the methods of Animal
// By Mapping Dog.prototype to Aimal.prototype
Dog.prototype = Object.create(Animal.prototype);
// finally resetting constructor as we have overriden Dog.prototype.constructor function with Animal.protoype.constructot
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('Woof Woof!')
  this.energy -= .1
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')
console.log(charlie.constructor)

// Please refer to this link also for more details: https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/



// *************************************************************************************************************************
// ********************************************* Core Fundamental Questions ************************************************
// *************************************************************************************************************************


// Q4. What is Lexical Scope

// Lexical means static, where the code is written

var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {return scope;}
   return func;
}

whatismyscope()();
//The above code will return "I am just a local". It will not return "I am a global".
//Because the function func() counts where is was originally defined which is under the scope of function whatismyscope.
//It will not bother from whatever it is being called(the global scope/from within another function even), that's why global scope value I am global will not be printed.
//This is called lexical scoping where "functions are executed using the scope chain that was in effect when they were defined" - according to JavaScript Definition Guide.
//Lexical scope is a very very powerful concept.

// for Ref: https://stackoverflow.com/questions/1047454/what-is-lexical-scope





