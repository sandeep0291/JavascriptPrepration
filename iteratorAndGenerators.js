// Iterators And Generators 


// --------------------ITERATORS ----------
// They give you a value every time you ASK from it, It's in some sense similar to
// other loop, but loops just run over the array or array of object in one go
// Iterators every time goes to next step everytime you call with next()


// Basically an iteratohas a function – next() – which allows you to output values step by step.


let anNumberArray  = [10, , 20];
let iterator = anNumberArray[Symbol.iterator]();
console.log(iterator.next()); // prints {done: false, value: 10}
// now if I call it again with next 
console.log(iterator.next()); // it will give me {done: false, value: 20}

// check done: property it will be set true after last array value
console.log(iterator.next());

// To know this iteration has reached to end we have to check
// done: true , can not rely on value: undefined because undefined can be a empty value too


//Generators
//Generators are functions which don’t necessarily run to the end upon execution.
//Instead, upon each call they yield a value. A generator is created by adding
//an asterisk in front of the function name.
function *select() {
 yield 'House Data';
 yield 'Person Data';
}
// When executing a function they don’t return a value immediately, instead
// an iterator is returned. This iterator may then be used to access the
// returned values step by step.
let iterator = select();
console.log(iterator.next()); // prints House Data
console.log(iterator.next()); // prints Person Data
console.log(iterator.next()); // prints undefined
//Of course you may also pass arguments to generators and use them in the function body.
