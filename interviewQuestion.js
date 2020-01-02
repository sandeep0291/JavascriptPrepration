// Regular array methods used Clarity

// ************************************************  SLICE METHOD ********************************************************

// It doesn't mutate original array, returns a new array
// It takes two argument, 1st from where to start index, 2nd where to end if not set it will consider till end of elemen

// The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);


console.log(citrus);  // [Orange,Lemon] // remember end th element is not included
console.log(fruits); //   ["Banana", "Orange", "Lemon", "Apple", "Mango"] will remains the same



// ************************************************  SPLICE METHOD ********************************************************

// It takes 3 arguments, 1st Index where to start, 2nd no of element to be added/deleted Optional if not given will take till last th element
// 3rd..nth  arguments values to be added in the array

// Remember it MUTATE'S Original Array

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.splice(1, 3);
console.log(citrus);  // ["Orange","Lemon", "Apple"] // remember end th element is not included
console.log(fruits); //   ["Banana", "Mango"] Remember it mutates original array


// How to add elements here
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var checkSpread = ["X","Y"];
var citrus = fruits.splice(2, 1, ...checkSpread); // one item removed here and 2 items will be inserted with spread operator


console.log(fruits); // Banana,Orange,X,Y,Mango
console.log("//");
console.log(citrus); // Apple





// Q1. Function to remove two adjacent duplicate characters from a string. 
// let str = 'abbbbaca'; // output: 'ca'

function duplicateString(str){
    var len = str.length; //8
    var i=0;
    while(i < len){
        if( str.charAt(i) ===  str.charAt(i+1)){
            str = str.slice(0,i)+str.slice(i+2);
            len = len-2; // 6
            //i=len-i-2;   // 
        }
        else if( str.charAt(i) ===  str.charAt(i-1) ){
            str = str.slice(0,i-1)+str.slice(i+1);
            len = len-2;
            i=i-1;
        }
        else i++;

    }
    console.log("Remaing String: "+ str);
}

duplicateString('Sandeep');


// Q2. What is Singleton Pattern

// Singleton pattern in Javascript

var Singleton = (function(){
    var instance;
    
    var addition = function(a,b){
        return a+b;
    }

     var subtraction = function(a,b){
        return a-b;
    }

    function createInstance(){
        return {
            add: addition,
            sub: subtraction
        }
    }

    return {
        getInstance: function(){
            if(instance){
                return instance;
            }
            else{
                instance = createInstance();
                return instance;
            }
        }
    }
   

})();


var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();


if(instance1 === instance2) 
    console.log('Instance are same')
else
   console.log('Instance are not same')


// Q3. Flatten a nested array
// Flatten An an nested array 
var  arr = [ [1,2,3,[4,5]] , [6,7], [8,9,[ 10, 11, [12,13] ]] ];


function flattenArray(arr){
   
    //var i;
    for( var i=0; i <arr.length; i++){

        if( Array.isArray(arr[i]) ) {
             var newArr = [].concat.apply([], arr[i]);
             arr.splice(i,1);
             arr = arr.concat(newArr);
             i=-1;
             console.log(arr);
        }

    }
    return arr;
}


flattenArray(arr)


// ***********  Q4. Inheritance in javascript *******************  @Sandeep Kumar
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



// Q5. What is localStorage and sessionStorgae

// Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.

//What’s interesting about them is that the data survives a page refresh (for sessionStorage) and 
// even a full browser restart (for localStorage)

setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete everything.
key(index) – get the key on a given position.
length – the number of stored items.