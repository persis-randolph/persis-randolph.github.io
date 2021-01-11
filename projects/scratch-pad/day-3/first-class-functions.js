// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function which takes a value as a parameter
    return function(value) {
        if (value > base) { // if value > base, return true
            return true;
        }
        return false; // if value <= base, return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value) { // return a function which takes a value as a parameter
        if (value < base) { // if value < base, return true
            return true;
        }
        return false; // if value >= base, return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(inputString) { // return a function which accepts an input string
        let capLetter = startsWith.toUpperCase(); // convert character to uppercase in case it isn't already
        let capString = inputString.toUpperCase(); // convert string to uppercase to match input character
        if (capString[0] === capLetter) { // if first value in the string is equal to character return true
            return true;
        }
        return false; // otherwise return false
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string) { // return a function which tests a given string as the argument
        let capLetter = endsWith.toUpperCase(); // converts given character to caps
        let capString = string.toUpperCase(); // converts given string to caps
        if (capString[capString.length-1] === capLetter) { // if last letter of the string is equal to character, return true
            return true;
        }
        return false; // else, return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // PLAN: loop to pass each string to the modify function, returning each new value into an array
            var args = Array.from(strings); // pass strings into an array
            var newArray = []; // declare new array
            // loop through args
            for (var i = 0; i <= args.length-1; i++) {
            // for (var i = 0; i <strings.length; i++) {} // this would have been more efficient
              // push new modified values into new array
              newArray.push(modify(args[i]));
              // could have also used:
              // strings[i] = modify(strings[i]); <- would need to change some other code as well
            }
            return newArray; // return new array

    // of note:
    // for(var string of strings) {} to loop through each string of the strings array
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclamations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // return strings.every(test); // other solution
    
    // loop through the strings
    for (var i = 0; i < strings.length; i++) {
        // if running the test on strings returns false, return false
        if (test(strings[i]) === false) {
            return false;
        }
    }
    return true; // if no tests return false, return true

    // YOUR CODE ABOVE HERE
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
