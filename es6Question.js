// Questions
// 1. Map
// 2. Reduced
// 3. Filter


// Q1. **************************************** Map  ****************************************
//     ****************************************      ****************************************

// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
// [20, 24, 56, 88]

var officersIds = officers.map(function (officer) {
  return officer.id
});

// Below how we could have done with a forEach function
var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});



// Q2. **************************************** Reduce  ****************************************
//     ****************************************      ****************************************


// Just like .map(), .reduce() also runs a callback for each element of an array. 
//What’s different here is that reduce passes the result of this callback (the accumulator) 
// from one array element to the other.


var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];


// We need to know the total years of experience of all of them. With .reduce(), it’s pretty straightforward:
var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);


// Q3. **************************************** Filter  ****************************************
//     ****************************************      ****************************************


// What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!
// Here’s our data:
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];
//Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});
var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});
//That’s it! And it’s even shorter with arrow functions:
const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");




