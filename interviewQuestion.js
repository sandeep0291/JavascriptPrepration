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
