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

function reverseArrayInPlace(array, i = 0) {
  // if we have gone past the middle index of the array, return the array
  if (i > Math.floor((array.length - 1) / 2)) return array;
  // save the earlier element in a variable
  let switchElement = array[i];
  // set the earlier element equal to the later element
  array[i] = array[array.length-1-i];
  // set the later element to the saved variable containing old earlier element
  array[array.length-1-i] = switchElement;
  // recurse over the array, one and switch elements one index higher
  return reverseArrayInPlace(array, ++i);
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // set initial list value at null
  let list = null;
  // loop through the array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
    // add value of current indexed element, and rest value of list
    list = {value: array[i], rest: list};
  }
  // return the list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
  // add value of value to the new array
  array.push(list['value']);
  // if value of rest is null, return the new array
  if (list['rest'] === null) return array;
  // recurse over the next portion of the list
  return listToArray(list['rest'], array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// add a helper function prepend, which takes an element and a list and
// creates a new list that adds the element to the front of the input list

// input: element, list, default parameter of the new list
function prepend(el, list, elPlusList = {}) {
  // set value of new list to the given element
  elPlusList['value'] = el;
  // set value of rest to the existing list
  elPlusList['rest'] = list;
  // return new list
  return elPlusList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * prompt:
 * which takes a list and a number and returns the element at the given position
 * in the list (with zero referring to the first element) or undefined when there
 * is no such element.
 */

function nth(list, el) {
  // if element is less than 0 (does not exist) return undefined
  if (el < 0) return undefined;
  // if specified element (or recursed element) is 0, return that value
  if (el === 0) return list['value'];
  // if element is higher than 0, recurse over next nested list and subtract 1 from element
  return nth(list['rest'], --el);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values of
// the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator for
// that) or have their properties compared, you can use the typeof operator. If it
// produces "object" for both values, you should do a deep comparison. But you have
// to take one silly exception into account: because of a historical accident,
// typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties
// of objects to compare them.

function deepEqual(val1, val2) {
  let result = false;
  if (Array.isArray(val1) && Array.isArray(val2)) {
    for (let i = 0; i < val1.length; i++) {
      if (val1[i] !== val2[i]) return result;
    }
    result = true;
  }
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    let compArr1 = Object.keys(val1);
    let compArr2 = Object.keys(val2);
    if (typeof val1[compArr1[0]] === 'object') {
      return deepEqual(val1[compArr1[0]], val2[compArr2[0]]);
    }
    for (let [key, value] of Object.entries(val1)) {
      compArr1.push(value);
    }
    for (let [key, value] of Object.entries(val2)) {
      compArr2.push(value);
    }
    for (let i = 0; i < compArr1.length; i++) {
      if (compArr1[i] !== compArr2[i]) return result;
    }
    result = true;
  }
  return result;
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
