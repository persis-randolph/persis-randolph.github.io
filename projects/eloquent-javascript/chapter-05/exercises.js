// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(subarrays) {
  // create a new return array
  let flattenedArray = [];
  // loop through the subarrays
  subarrays.forEach(subarray => {
    for (let i = 0; i < subarray.length; i++) {
      // pushing each element into the return array
      flattenedArray.push(subarray[i]);
    }
  });
  // return the new flattened array
  return flattenedArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Write a higher-order function loop that provides something like a for loop
// statement. It takes a value, a test function, an update function, and a body
// function. Each iteration, it first runs the test function on the current loop
// value and stops if that returns false. Then it calls the body function, giving
// it the current value. Finally, it calls the update function to create a new value
// and starts from the beginning.
// When defining the function, you can use a regular loop to do the actual looping.

function loop(val, testFunc, updateFunc, bodyFunc) {
  
  for (let i = val; testFunc(i) === true; i = updateFunc(i)) {
    bodyFunc(i);
  }

}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Implement every as a function that takes an array and a predicate function as
// parameters. Write two versions, one using a loop and one using the some method.

function every(array, action) {
  // let results be true
  let results = true;
  // run through each element in the array
  for (let i = 0; i < array.length; i++) {
    // if the predicate function done on the array element returns falsy
    if (!action(array[i])) {
      // change results to false
      results = false;
    }
  }
  // return results as true if none of the tests returned false
  return results;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
// The dominant direction is the direction of a majority of the characters that
// have a script associated with them. The characterScript and countBy functions
// defined earlier in the chapter are probably useful here.

function dominantDirection(string) {
  // 
  let tally = countBy(string, char => {
    let script = characterScript(char.codePointAt(0));
    if (script) return script.direction;
    else return 'none';
  }).filter(({name}) => name != 'none');
  
  if (tally.length === 0) return 'ltr';
  console.log(tally);
  // Array(2)
  // 0: {name: "ltr", count: 3}
  // 1: {name: "rtl", count: 9}
  return tally.reduce((a,b) => {
    if (a.count > b.count) {
      return a;
    }
    return b;
  }).name;
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
