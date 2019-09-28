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
