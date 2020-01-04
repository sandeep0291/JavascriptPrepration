// Map

// A Map is a key-value collection introduced in ES6. It kind of fills the gap
// between arrays (no key-value pairs) and objects (key-value pairs but much more complex than a simple collection).
// You can create a Map like this:

  let cardAce = {
   name: 'Ace of Spades'
  };
  let cardKing = {
   name: 'King of Clubs'
  };
  let deck = new Map();
  deck.set('as', cardAce);
  deck.set('kc', cardKing);

//You can get values from a map by using the get(key) method. Of course
// you also have methods to clear a map or delete single items.

// Map vs Object in JavaScript

Map is a data structure which helps in storing the data in the form of pairs.
The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.

Object follows the same concept as that of map i.e. using key-value pair for storing data.
But there are slight differences which makes map a better performer in certain situations.

Few basic differences are as follows:

1. In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
2. In the Map, the original order of elements is preserved. This is not true in case of objects.
3. The Map is an instance of an object but the vice-versa is not true.
