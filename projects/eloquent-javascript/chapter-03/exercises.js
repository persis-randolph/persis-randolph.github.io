////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
  
  // if the first number is greater than the second number
  if (num1 > num2) {
    // return the smaller (2nd) number
    return num2
  // if the second number is greater than or equal to the 1st number
  } else {
    // return the 1st number
  	return num1;
  }

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Zero is even. One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The
// function should accept a single parameter (a positive, whole number) and return a Boolean.
// Must also have a plan for negative numbers

// input: number
function isEven(num) {
  // if the number is 0, return true (even)
  if (num === 0) {
    return true;
  // if the number is 1, return false (odd)
  } else if (num === 1) {
    return false;
  // if the number negative
  } else if (num < 0) {
    // make it positive and run it back through the function
    return isEven(-num);
  // if not 1, 0, or negative
  } else {
    // subtract 2 and run through the function again
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// write a function called countChar that behaves like countBs, except it takes a
// second argument that indicates the character that is to be counted (rather
// than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// takes in a string and a character to count the instances of
function countChars(str, char) {
  
  // start a counter of instances at 0
  let counter = 0;
  // run through the characters in the string
  for (let i = 0; i < str.length; i++) {
    // if the character is the same as the input character
    if (str[i] === char) {
      // add one to the counter
      counter++;
    }
  }
  // return the count of instances back
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the string.

// input a string
function countBs(str) {
  
  // start a counter of instances at 0
  let counter = 0;
  // loop through each index of the string
  for (let i = 0; i < str.length; i++) {
    // if the character is 'B'
    if (str[i] === 'B') {
      // add one to the counter
      counter ++;
    }
  }
  // return the count of instances back
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
