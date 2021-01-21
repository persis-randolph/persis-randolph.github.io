// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
 * START OF OUR LIBRARY!
 * Implement each function below its instructions
 */

/** _.identity
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Returns <value> unchanged
 * Examples:
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 */

_.identity = function(value) {
    // return the input value unchanged
    return value;
}


/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */

_.typeOf = function(value) {
    // return the typeof the input value as a string
    // if value is a string
    if (typeof value === 'string') {
        return 'string'; // return 'string'
        // if value is an array
    }
    else if (Array.isArray(value) === true) {
        return 'array'; // return 'array'
        // if value is a number
    }
    else if (typeof value === 'number') {
        return 'number'; // return 'number'
        // if value is a boolean
    }
    else if (typeof value === 'boolean') {
        return 'boolean'; // return 'boolean'
        // if value is undefined
    }
    else if (value === undefined) {
        return 'undefined'; // return 'undefined'
        // if value is null
    }
    else if (value === null) {
        return 'null'; // return 'null'
        // if value is a function
    }
    else if (typeof value === 'function') {
        return 'function'; // return 'function'
        // if value is an object
    }
    else if (typeof value === 'object') {
        return 'object'; // return 'object'
    }
}


/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

_.first = function(array, number) {
    // declare a returnArray
    let returnArray = [];
    // if the input for array isn't an array, or the input number given is negative
    if (!Array.isArray(array) || number < 0) {
        return []; // return an empty array
        // if no input number was given, or the input number is not a number
    }
    else if (number === undefined || typeof number !== 'number') {
        return array[0]; // return the first value in the array
        // if the input number is higher than the length of the array
    }
    else if (number > array.length) {
        // change the number to the length of the array
        number = array.length;
    }
    // loop through the array until you reach array[number]
    for (let i = 0; i < number; i++) {
        // push these array values into the returnArray
        returnArray.push(array[i]);
    }
    return returnArray; // return these new values
}


/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

_.last = function(array, number) {
    // initialize return array
    let returnArray;
    // if they input array is not an array, or the input number is negative
    if (!Array.isArray(array) || number < 0) {
        return []; // return empty string
        // if there is no input number, or the input for number is not a number
    }
    else if (number === false || typeof number !== 'number') {
        return array[array.length - 1]; // return last value of the array
        // if the number is greater than the length of the array
    }
    else if (number > array.length) {
        // change number to the array length
        number = array.length;
    }
    // take the input number amount of digits off the back of the input array and
    // enter them into returnArray
    returnArray = array.splice(array.length - number);
    // return this as output
    return returnArray;
}


/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

_.indexOf = function(array, value) {

    // set a return index for if the value is found
    let foundIndex = -1;
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        // if the array value matches the input value
        if (array[i] === value) {
            // set that index as the foundIndex
            foundIndex = i;
            // if this index is found
            if (foundIndex >= 0) {
                break; // break out of the loop
            }
        }
    }
    return foundIndex;

}


/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

_.contains = function(array, value) {
    // set an initial false result
    let result = false;
    // loop through the array
    for (let i = 0; i < array.length && !result; i++) {
        // if the input value matches the value in the array
        result = array[i] === value ? true : false;
        }

    // return that message
    return result;
    
    // // set an initial false result
    // let result = false;
    // // loop through the array
    // for (let i = 0; i < array.length; i++) {
    //     // if the input value matches the value in the array
    //     if (array[i] === value) {
    //         // change result to true
    //         result = true;
    //     }
    // }
    // // let a return message equal true or false depending on
    // // if the result is true
    // let returnMsg = result === true ? true : false;
    // // return that message
    // return returnMsg;
}


/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

_.each = function(collection, action) {
    // if the input collection is an array
    if (Array.isArray(collection)) {
        // loop through the array
        for (var i = 0; i < collection.length; i++) {
            // call the action on each element in the array
            action(collection[i], i, collection);
        }
        // if it's an object
    }
    else {
        // loop through the object properties
        for (var key in collection) {
            // call the action on each object property
            action(collection[key], key, collection);
        }
    }
}


/** _.unique
 * Arguments:
 *   1) An array
 * Objectives:
 *   1) Return a new array of all elements from <array> with duplicates removed
 *   2) Use _.indexOf() from above
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */

// _.indexOf() takes an array and a value and returns the index of the first
// occurrence of that value

_.unique = function(array) {
    // declare new array
    let uniqueArray = [];
    // loop through elements in the input array
    for (let i = 0; i < array.length; i++) {
        // check to see if the array[i] value is already in the new array
        if (_.indexOf(uniqueArray, array[i]) === -1) { // if not
            uniqueArray.push(array[i]); // add to the new array
        }
    }
    return uniqueArray; // return new array
}



/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */

// note: _.each takes in a collection and function and runs each piece of that
// object or array through the function

// Ryan is going to go through this one at tutoring.

_.filter = function(array, action) {
    // new return array
    let returnArr = [];

    // if the input array is an array
    if (Array.isArray(array)) {
        // looping through each element of the array
        _.each(array, function(e, i, a) {
            // if doing the action on e, i, a returns true
            if (action(e, i, a) === true) {
                // add that element to the new array
                returnArr.push(e);
            }
        });
    }
    // return the return array
    return returnArr;
}


/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter()
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

_.reject = function(array, action) {
    // new return array
    let returnArr = [];

    // if the input array is an array
    if (Array.isArray(array)) {
        // loop through each element of the array
        _.each(array, function(e, i, a) {
            // if doing the action on e, i, a returns false
            // add that element to the new array
            if (action(e, i, a) === false) {
                returnArr.push(e);
            }
        });
    }
    // return the return array
    return returnArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, action) {
    // new return array
    let falsyArr = [];
    let truthyArr = [];
    let megaArr = [];

    // if the input array is an array
    if (Array.isArray(array)) {
        // loop through each element of the array
        _.each(array, function(e, i, a) {
            // if doing the action on e, i, a returns false
            // add that element to the new array
            if (action(e, i, a) === false) {
                falsyArr.push(e);
            }
            else if (action(e, i, a) === true) {
                truthyArr.push(e);
            }
        })
    }
    megaArr.push(truthyArr, falsyArr);
    return megaArr;
}


/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */
_.map = function(collection, action) {
    // new return array
    let returnArr = [];

    // if the input collection is an array
    if (Array.isArray(collection)) {
        // loop through each element of the array
        _.each(collection, function(e, i, a) {
            // if doing the action on e, i, a returns false
            // add that element to the new array
            returnArr.push(action(e, i, a));
        })
    }
    // if the input collection is an object (not an array)
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        // loop through each element of the array
        _.each(collection, function(v, k, o) {
            returnArr.push(action(v, k, o));
        })
    }
    // return the return array
    return returnArr;
}


/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
_.pluck = function(array, prop) {
    // new return array
    let returnArr = [];

    // run the map function on each element in the array
    _.map(array, function(v, k, o) {
        // push each value into the returnArray
        returnArr.push(v[prop]);
    })

    // return the return array
    return returnArr;
}


/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */
_.every = function(collection, action) {
    // declare result as true
    let result = true;

    // the input action isn't a function
    if (typeof action !== 'function') {

        // run through each element in the collection
        _.each(collection, function(e, i, a) {
            // if the value of any element is falsy
            if (e === false) {
                // change result to false
                result = false;
            }
        })

    }

    // or if function is a function
    else {

        // run through every element of the collection
        _.each(collection, function(e, i, a) {
            // if doing the action on e, i, a returns false even once
            if (action(e, i, a) === false) {
                result = false; // change the result to false
            }
        })
    }


    // return result
    return result;
}



/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */
_.some = function(collection, action) {
    // declare result as true
    let result = false;

    // the input function isn't a function
    if (typeof action !== 'function') {

        _.each(collection, function(e, i, a) {
            if (e === true) {
                result = true;
            }
        })

    }
    else {

        // run function on every element of the collection
        _.each(collection, function(e, i, a) {
            // if doing the action on e, i, a returns false
            if (action(e, i, a) === true) {
                result = true; // change the result to false
            }
        })
    }


    // return result
    return result;
}


/** _.reduce
 * Arguments:
 *   1) An array
 *   2) A function
 *   3) A seed
 * Objectives:
 *   1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 * Edge Cases:
 *   1) What if <seed> is not given?
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */
_.reduce = function(array, action, seed) {

    // declare a memo (historical reference sort of)
    let memo;

    // no seed value was given
    if (seed === undefined) {
        // set memo equal to the first value of the array
        memo = array[0];
        // run through the elements of the array
        _.each(array, function(e, i, a) {
            // if not the first indexed value
            if (i !== 0) {
                // do the action on the memo, element, and index and save that to memo
                memo = action(memo, e, i, a);
            }
        })
        // return changed memo
        return memo;
    // if a seed value WAS given
    } else {
        // set memo to the value of seed
        memo = seed;
        // run through the elements of the array
        _.each(array, function(e, i, a) {
            // do the action on the memo, element, and index and save that to memo
            memo = action(memo, e, i, a);
        })
        // return changed memo
        return memo;
    }
}



        /** _.extend
         * Arguments:
         *   1) An Object
         *   2) An Object
         *   ...Possibly more objects
         * Objectives:
         *   1) Copy properties from <object 2> to <object 1>
         *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
         *   3) Return the update <object 1>
         * Examples:
         *   var data = {a:"one"};
         *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
         *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
         */
        _.extend = function(ogObj, ...obj) {
            // take all the input object properties and add them into the original object
            Object.assign(ogObj, ...obj);
            // return the original object
            return ogObj;
        }

        //////////////////////////////////////////////////////////////////////
        // DON'T REMOVE THIS CODE ////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////

        if ((typeof process !== 'undefined') &&
            (typeof process.versions.node !== 'undefined')) {
            // here, export any references you need for tests //
            module.exports = _;
        }
