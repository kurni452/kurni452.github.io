//STEP 1 

var myName = 'Ivy';
var lastName = 'Kurniawan';
var favNumber = 2;
var favNumberString = '2';
var iLoveNoodles = true;
var nameArray = ['i', 'v', 'y'];
var myArray = ['age', 25, false];
var fullName = 'Ivy' + 'Kurniawan';
var hundred = 60 + 40;

console.log('My name is', myName);
console.log('My favourite number is', favNumber);
console.log('My favourite number is', favNumberString);
console.log('I love noodles', iLoveNoodles);
console.log('The letters in my name are', nameArray);
console.log('my array is', myArray);
console.log('my full name is', fullName);
console.log('60 + 40 is', hundred);

//STEP 2

var firstLetter = nameArray[0];
var lastLetter = nameArray[myArray.length - 1];

console.log('The first letter in my name is', firstLetter);
console.log('The last letter in my name is', lastLetter);

//STEP 3

var longWord = 'supercalifragilisticexpialidocious'.length;
console.log('The number of letters in this long word is', longWord);

//STEP 4

var nameLength = myName.length == lastName.length;
console.log('The number of letters in my first name is equal to the number of letters in my last name', nameLength);

//STEP 5

var totalStudents = 15;
var presentStudents = 14;

if ( totalStudents == presentStudents ) {
  console.log('Everyone is here');
} else {
  console.log('Not everyone is here');
}

// STEP 6

for ( var i = 0; i < nameArray.length; i++ ) {
  console.log( nameArray[i] + ' is a letter in my name ');
}

// STEP 7 

var date = new Date;
var hour = date.getHours();
var min = date.getMinutes();

if ( 19 < hour < 21 && min == 40 ) {
  console.log("It's between 7pm and 9:40pm");
} else {
  console.log("It's not between 7pm and 9:40pm");
} 

// STEP 8 

var day = date.getDay();

if ( day == 1 ) {
  console.log("It's Monday!");
} else if (day == 2) {
  console.log("It's Tuesday!");
} else if (day == 3) {
  console.log("It's Wednesday!");
} else if (day == 4) {
  console.log("It's Thursday!");
} else if (day == 5) {
  console.log("It's Friday!");
} else if (day == 6) {
  console.log("It's Saturday!");
} else if (day == 7) {
  console.log("It's Sunday!");
}

// STEP 9

var favRestaurants = [
  "Ootoya",
  "Yoon Haeundae",
  "TsuruTonTan",
];

var favAnimals = [
  "Dogs",
  "Horses",
  "Koalas",
];

var favPlaces = [
  "Soho",
  "Chelsea",
  "The Met Cloisters",
];

var favPokemon = [
  "Pikachu",
  "Charmander",
  "Squirtle",
];

// STEP 10 

var favThings = [favRestaurants, favAnimals, favPlaces, favPokemon]

// STEp 11 

for ( var i = 0; i < favThings.length; i++ ) {
  console.log( favThings[i]);
}

// STEP 12 

for ( var i = 0; i < favThings.length; i++ ) {
  console.log( favThings[i]);

  for ( var x = 0; x < favThings[i].length; x++) {
  	  console.log(favThings[i][x]);
	}
}




