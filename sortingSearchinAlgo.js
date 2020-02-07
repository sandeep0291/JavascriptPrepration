// Codility my answer

1. CyclicRotation         https://app.codility.com/demo/results/trainingCEZKNG-7NC/
2. OddOccurrencesInArray  https://app.codility.com/demo/results/training8EUXY2-Q8Z/      
3. FrogRiverOne           https://app.codility.com/demo/results/trainingE5WM8C-MVY/
4. TapeEquilibrium        https://app.codility.com/demo/results/trainingCJ44QG-373/

// Reverse a sentence words at it's place 
// Ex: "Hello I am Sandeep Kumar " . output will be  "olleH I ma  peednaS  ramuK  "


var str = 'Hello I am  Sandeep  Kumar ';
var finalStr = '';
var tempStr = '';

for(let i=str.length-1; i >= 0; i--){ 
    if(str.charAt(i) !== " "){
        tempStr += str.charAt(i);
    }
    else{
        finalStr = tempStr+" "+finalStr;
        tempStr = '';
    }
     
}
finalStr = tempStr+" "+finalStr;
