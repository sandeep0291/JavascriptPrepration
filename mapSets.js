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
// Refer this link for more info: https://www.geeksforgeeks.org/map-vs-object-in-javascript/

Map is a data structure which helps in storing the data in the form of pairs.
The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.

Object follows the same concept as that of map i.e. using key-value pair for storing data.
But there are slight differences which makes map a better performer in certain situations.

Few basic differences are as follows:

1. In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
2. In the Map, the original order of elements is preserved. This is not true in case of objects.
3. The Map is an instance of an object but the vice-versa is not true.


// Weak Map

// Weak map is almost similar to Map

The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak.
i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,

1. Maps can store any key type Whereas WeakMaps can store only collections of key objects
2. WeakMap does not have size property unlike Map
3. WeakMap does not have methods such as clear, keys, values, entries, forEach.
4. WeakMap is not iterable.


// SET

A Set is a collection which only holds values. Sounds like an Array? Almost,
but a Set will only old unique values. That means, no value can appear
more often than once in a Set.
You can loop through a set to retrieve the values (or use an Iterator). You
can also clear() a set or delete individual values by using delete().
Remember, each value is unique, therefore you don’t need a key or index to
delete a value!

You can create a Set like this:
  let cardAce = {
   name: 'Ace of Spades'
  };
  let cardKing = {
   name: 'King of Clubs'
  };
  let deck = new Set();
  deck.add(cardAce);
  deck.add(cardKing);
  deck.add(cardKing); // Won’t be added, only added once!

// Weak set is similar to weak map

