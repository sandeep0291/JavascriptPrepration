// SPREAD OPERATOR USES

// 1.
// spread operator very easy to uses to make object/array copy so that it doesn't mutate orignal object
// check I have updated lastName and it doesn't mutate orignal object i.e person

var person = { name: 'Sandeep', lastName: 'Kumar', address: 'Pune', contactNumber: 789292822 };
var personCopy = {...person, lastName: 'Arya'};

console.log(personCopy);
/*  {name: "Sandeep", lastName: "Arya", address: "Pune", contactNumber: 789292822} */

// Here lastName doesn't mutate/change
console.log(person);
/* {name: "Sandeep", lastName: "Kumar", address: "Pune", contactNumber: 789292822} */


// Same scenario goes for an array

var animal = [10,20,30,40,70];

// pushed 89 here with copying from animal array to animalCopy
var animalCopy = [...animal, 89];

// normal way of pushing 
animalCopy.push(80);

console.log(animalCopy);
//  [10, 20, 30, 40, 70, 80]

console.log(animal);
// [10, 20, 30, 40, 70]





