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