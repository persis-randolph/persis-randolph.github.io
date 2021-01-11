// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // input parameter "array"
  // start on 1st value of array, index=0
  // while the value is less than the length of the array
  // increment up the array by one index value each time
  for (var i = 0; i <= array.length - 1; i++) {
    console.log(array[i]); // log each value to the console
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // initialize index at the array length-1, while index is greater or equal to 0, decrement by 1
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]); // log the value of that array index
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create new array
  let newArray = [];
  
  // access keys of object
  for (var key in object) {
    newArray.push(key); // add each key to a new array
  }
  return newArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // loop through object keys
  for (var key in object) {
    console.log(key); // print each key to the console
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var newArray = [];  // declare new Array
  for (var key in object) {  // run through object keys using a for in loop
    newArray.push(object[key]); // add each value to the new array
  }
  return newArray; // return new array
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) { // loops through object keys
    console.log(object[key]); // prints each value to the console
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  let count = 0; // start count at 0
  for (var key in object) { // loop through object keys
    count++; // each key add to the count
  }
  return count; // return count value
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // PLAN - create an array of these values, using unshift to add to the front of the array, then print values
  
  // my first solution:
  // let anotherArray = []; // create new empty array
  // for (var key in object) { // loop through object keys
  //   anotherArray.unshift(object[key]); // add each value to front of the array
  // }
  
  // for (var i=0; i <= anotherArray.length-1; i++) { // loop through array starting at index value 0
  //   console.log(anotherArray[i]); // log each value to the console
  // }
  
  // in class discussed solution:
  let newArray = Object.values(object); // creates an array of the values of the object
  for (var i = newArray.length - 1; i >= 0; i--) { // loop through new array in reverse
    console.log(newArray[i]); // print values to console
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
