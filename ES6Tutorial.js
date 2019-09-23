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


// ------------------------------------------------------------------------------------------------------------------------------------ 

// 2.
// passing as argument/parameter
// here this will work as array, check numbers argument used in both cases to know difference

function sum(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length;i++){
        sum += numbers[i];
    }
    console.log(sum);
    return sum;
}

// suppose here to pass(numbers) we don't have an array and parameters can be passed as numbers
// for ex:
// sum1(10,90,100,100)  then here we can use spread operator like this

function sumWithSpreadOpertor(...numbers){
    var sum = 0;
    for(var i=0; i<numbers.length;i++){
        sum += numbers[i];
    }
    console.log("Sum with spread operator: " + sum);
    return sum;
}
sumWithSpreadOpertor(10,90,100,100);



// ------------------------------------------------------------------------------------------------------------------------------------



// 3.
// This is same as of above but here it will be called as rest operator
// REST operator are used when calling a function while SPREAD operator are used when declaring a function

let restNumbers =[10,20,30,200,5];
console.log(...restNumbers); // 10 20 30 200 5

console.log("Max Number with Rest Operator: " + Math.max(...restNumbers));


