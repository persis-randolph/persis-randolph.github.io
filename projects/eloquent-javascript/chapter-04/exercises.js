////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// default for step is 1 if x is a smaller number, -1 if x is a bigger number
var range = function(x, y, step = x < y ? 1 : -1, rangeArr = []) {
  
  // if input values are the same
  if (x === y) {
    return rangeArr; // return empty array
  }
  
  // if stepping from x to y (step is positive)
  if (step > 0) {
    // loop through from the input value of x, ending at the input value of y
    // using step to increment
    for (let i = x; i <= y; i += step) {
      // push each value onto the new array
      rangeArr.push(i);
    }
  // if stepping from y to x (step is negative)
  } else {
    // loop through from the input value of x, ending at the input value of y
    // using step to decrement (will be negative value steps)
    for (let i = x; i >= y; i += step) {
      // push each value onto the new array
      rangeArr.push(i);
    }
  }
  // return new array
  return rangeArr;
};

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // if empty array, return 0
  if (array.length === 0) return 0;
  // if array has one element, return that element
  if (array.length === 1) return array[0];
  // return first element of array + the recursed values of the rest of the elements in the array
  return array[0] + sum(array.slice(1));
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // create empty array
  let reversedArr = [];
  // loop from last element to first
  for (let i = array.length - 1; i >= 0; i--) {
    // push each element into the new array
    reversedArr.push(array[i]);
  }
  // return new reversed array
  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
