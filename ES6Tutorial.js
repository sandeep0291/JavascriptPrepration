// spread operator uses

var person = { name: 'Sandeep', lastName: 'Kumar', address: 'Pune', contactNumber: 789292822 };

// spread operator very easy to uses to make object copy so that it doesn't mutate orignal object
// check I have updated lastName and 
var personCopy = {...person, lastName: 'Arya'};

console.log(personCopy);
/*
    {name: "Sandeep", lastName: "Arya", address: "Pune", contactNumber: 789292822}
  
*/

// Here lastName doesn't mutate/change
console.log(person);
/*
   {name: "Sandeep", lastName: "Kumar", address: "Pune", contactNumber: 789292822}
  
*/

// Same scenario goes for an array

var animal = [10,20,30,40,70];
var animalCopy = [...animal];
animalCopy.push(80);

console.log(animalCopy);
/*
[10, 20, 30, 40, 70, 80]
*/

// 
console.log(animal);
/*
[10, 20, 30, 40, 70]
*/


