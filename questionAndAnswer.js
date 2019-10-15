// Objects ***************
// 1. How to clone objects
// 2. how to deep clone objects
// 3. How to merge objects
// 4. What is object.assign()
// 5. What is Object.keys and where it's useful


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





// OOPS *********************
// 1. What is __proto__
// 2. Difference b/w prototype and __proto__
// 3. What is a function constructor
// 4. What is Object.create()
// 5. Ways to achieve inheritance in javascript


// Random *******************
// 1. Currying
// 2. Memonization
// 3. Functional Programming
// 4. Higher Order Functions
// 5. Compose and pipe
