/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create animal variable and assign to an empty object
var animal = {}; 
// using dot notation, give animal a species property and assign a value of dog
animal.species = "dog"; 
// give the dog a cutesy name using bracket notation and the name property
animal["name"] = "Bok Choy"; 
// create a noises property with the value of an empty array
animal.noises = []; 
// log animal object to the console
console.log(animal); 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create empty array named noises
var noises = []; 
// using bracket notation, assign a dog noise to the noises array
noises[0] = "bark"; 
// using an array function (push method), add another noise
noises.push("ruff"); 
// add an element to beginning of the noise array using unshift method
noises.unshift("whimper"); 
// use bracket notation to add an element to the end of the array, noises.length selects the index number after the last element already in the array
noises[noises.length] = "woof"; 
// print length of noises array to the console
console.log(noises.length); 
// print last element in noises array to the console, noises.length-1 will always select the last indexed value
console.log(noises[noises.length-1]); 
// print whole noises array to the console
console.log(noises); 

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use bracket notation to add noises property on animal object to the noises array
animal["noises"] = noises;
// add another noise to the noises property on animal
animal["noises"].push("bark bark");
// log the animal object to the console
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      You can use bracket or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *      You can use bracket notation using the index number
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an empty animals array
var animals = [];
// push the created animal (dog) into the animals array
animals.push(animal);
// log the animals array to the console
console.log(animals);
// create a duck object
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

// push duck object into the animals array
animals.push(duck);
// log animals array to the console
console.log(animals);

// create 2 more animal objects with species, name, and at least 2 noises
var cat = {
    species: 'cat',
    name: 'Fiona',
    noises: ['meow', 'purrrr', 'hisss', 'vomit']
};

var cow = {
    species: 'cow',
    name: 'Betsy',
    noises: ['moo', 'moooo', 'chew', 'mooooOOOOOooooo']
};

// add the 2 new animal objects to animals array
animals.push(cat, cow);
// log animals array to the console
console.log(animals);
// log the length of the animals array to the console
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a friends array (list)
var friends = []; // friends array cantains objects with similar attributes

// create a getRandom function which returns a random index of the input array
function getRandom () {
    // math.random to get random value between 0 and 1
    // multiple times animals.length to get a number between 0 and the length of the array, math.floor to round down to 0-9
    return Math.floor(Math.random() * animals.length); 
}

// call function to get a random index and then assign value to randAnimal
var randAnimal = animals[getRandom()];
// push that randAnimal onto the friends list
friends.push(randAnimal.name);
// log friends array to the console
console.log(friends);

// using brack notation add friends property (containing friends list) to one of the animals on the friends array
animals[0]["friends"] = friends;
// log animals to the console
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}