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



// Q1. **************************************** Reduce  ****************************************
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



