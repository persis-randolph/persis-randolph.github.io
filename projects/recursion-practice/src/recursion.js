// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // if a negative number, return null
  if (n < 0) return null;
  // base case, when the number reaches 0 - return 1
  if (n === 0) return 1;
  // recursion case
  // return number times number - 1, rerun factorial on next decremented integer
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // if an empty array, return 0
  if (array.length === 0) return 0;
  // base case:
  // when the length of the array reaches 1, return the 1st indexed value
  if (array.length === 1) return array[0];
  // recursion case
  // return the first array value + the rest of the array run through sum again
  return array[0] + sum(array.slice(1));
};

// // 3. Sum all numbers in an array containing nested arrays.
// // Example: arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {
//   // flatten array function
//   function flatten(array) {
// 	  return array.reduce((acc, curVal) => acc.concat(Array.isArray(curVal) ? flatten(curVal) : curVal), []);
//   }
//   // declare new array using flatten function
//   let flatArray = flatten(array);
//   // base case: stop when on the last value of the array, return that value
//   if (flatArray.length === 1) return flatArray[0];
//   // recursion case: add the curVal + recursion on rest of the values
//   return flatArray[0] + arraySum(flatArray.slice(1));
// };

// 4. Check if a number is even.
var isEven = function(n) {
  // if n is negative, make it positive and run back through recursion
  if (n < 0) return isEven(-n);
  // if n reaches 0, it is even, return true
  if (n === 0) return true;
  // if n reaches 1, it is odd, return false
  if (n === 1) return false;
  // if n is greater than 1
  if (n > 1) {
    // minus 2 and recurse again
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // if the number is 0, return 0
  if (n === 0) return 0;
  // if number is positive
  if (n > 0) {
    // return that number - 1 + recursive values of calling the number - 1
    return (n - 1) + sumBelow(n - 1);
  }
  // if the number is negative
  if (n < 0) {
    // return that number + 1 + recursive values of calling the number + 1
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, rangeArr = []) {
  // if first input is less than second input
  if (x < y) {
    // and if x is not equal to second num - 1
    if (x !== y - 1) {
      // reassign x as x + 1
      x = x + 1;
      // add incremented value of x to the return array
      rangeArr.push(x);
      // recurse over the new x, original y, and the range array
      range(x, y, rangeArr);
    }
    return rangeArr; // return the range array
  // if first input is more than second input
  } else if (x > y) {
    // if x is not equal to second num + 1
    if (x !== y + 1) {
      // reassign x as x - 1
      x = x - 1;
      // push new x onto the range array
      rangeArr.push(x);
      // recurse over the new x, orig y, and the range array
      range(x, y, rangeArr);
    }
    // return range array if x > y is complete
    return rangeArr;
  } else {
    // if x and y are equal, or not given, return default empty array
    return rangeArr;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case: any base to the power of 0 will always equal 1
  if (exp === 0) {
    return 1;
  // if exponent is negative
  } else if (exp < 0) {
    return (parseFloat((1 / base * exponent(base, exp + 1)).toFixed(5))); // this returns a string so now i have to make it a number again
  }
  // recursive case - we're going to want to lower the exponent each time and multiply base times itself again
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, testNum = 1) {
  if (n === 1 || n === 2) return true;
  else if (n > 2) return powerOfTwo(n / 2);
  return false;
};

// almost
// var powerOfTwo = function(n, testNum = 1) {
//   if (n === 2) return true;
//   if (testNum > n) {
//     return false;
//   } else if (testNum * testNum === n) {
//     return true;
//   } else {
//     return powerOfTwo(n, testNum + 1);
//   }
// };

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, reverseString = '') {
  if (string.length === 0) {
    return reverseString;
  } else {
    return string[string.length-1] + reverse(string.substring(0,string.length-1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // check to see if first and last letter match, if they don't return false
  // if they do match, run substring (minus 1st and last letter) through palindrome function again
  // base cases: if string is one letter, return true, if string is down to 0, return false
  if (string.includes(' ')) {
    string = string.replace(' ', '');
  }
  if (string.length === 1) return true;
  if (string[0].toUpperCase() === string[string.length-1].toUpperCase()) {
    return palindrome(string.substring(1, string.length-1));
  }
  return false;
};

// // 11. Write a function that returns the remainder of x divided by y without using the
// // modulo (%) operator.
// // modulo(5,2) // 1
// // modulo(17,5) // 2
// // modulo(22,6) // 4
// var modulo = function(x, y) {
// };

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y, total = 0, isNegative = false) {
  if (x < 0 && y < 0) {
    x = 0 - x;
    y = 0 - y;
  }
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    isNegative = true;
    if (x < 0) x = 0 - x;
    if (y < 0) y = 0 - y;
  } else if (y === 0 || x === 0) {
    if (isNegative) return 0 - total;
    return total;
  }
  total += x;
  return multiply(x, y - 1, total, isNegative);
};

// // 13. Write a function that divides two numbers without using the / operator  or
// // JavaScript's Math object.
// var divide = function(x, y) {
// };

// // 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// // integers is the greatest integer that divides both x and y with no remainder.
// // Example:  gcd(4,36);  // 4
// // http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// // https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
// var gcd = function(x, y) {
// };

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // if the strings are both empty, return true
  if (str1.length === 0 && str2.length === 0) {
    return true;
  // if the first characters match
  } else if (str1[0] === str2[0]) {
    // run compareStr on each string again minus the first char
    return compareStr(str1.slice(1), str2.slice(1));
  }
  // if the strings' first chars aren't equal, return false;
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, newArray = []){
  if (str.length === 0) return newArray;
  newArray.push(str[0]);
  return createArray(str.slice(1), newArray);
};

// 17. Reverse the order of an array
var reverseArr = function (array, reversedArray = []) {
  // base case: when the orig array is empty, return reversedArray
  if (array.length === 0) return reversedArray;
  // take the last element from orig array, push it into the reversedArray
  reversedArray.push(array[array.length-1]);
  // recurse over the rest of the array minus the last element
  array.pop();
  return reverseArr(array, reversedArray);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, listArr = []) {
  // base case: when the length reaches 0
  if (length === 0) return listArr;
  listArr.push(value);
  return buildList(value, length - 1, listArr);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  // base case: if array is empty, return count
  if (array.length === 0) return count;
  // recursive: check if first element equals value, add one to the count if it does
  // then return countOccurrence again on array with the first value removed
  if (array[0] === value) count++;
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, mappedArray = []) {
  // if the array is empty, return mappedArray
  if (array.length === 0) return mappedArray;
  // for the first element in the array, run the callback on its (element, index, and array)
  // the recurse over the array with the first element removed
  mappedArray.push(callback(array[0], 0, array));
  return rMap(array.slice(1), callback, mappedArray);
};

// // 21. Write a function that counts the number of times a key occurs in an object.
// // var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// // countKeysInObj(testobj, 'r') // 1
// // countKeysInObj(testobj, 'e') // 2
// var countKeysInObj = function(obj, key) {
// };

// // 22. Write a function that counts the number of times a value occurs in an object.
// // var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// // countValuesInObj(testobj, 'r') // 2
// // countValuesInObj(testobj, 'e') // 1
// var countValuesInObj = function(obj, value) {
// };

// // 23. Find all keys in an object (and nested objects) by a provided name and rename
// // them to a provided new name while preserving the value stored at that key.
// var replaceKeysInObj = function(obj, key, newKey) {
// };

// // 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// // number is the sum of the previous two.
// // Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// // fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// // Note:  The 0 is not counted.
// var fibonacci = function(n) {
// };

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
// var nthFibo = function(n, counter = 0, fiboSeq = [0,1,1,2,3,5,8,13,21]) {
//   if (n < 0) return null;
//   if (fiboSeq.length === 0) return false;
//   if (fiboSeq[0] === n) return counter;
//   return nthFibo(n, counter++, fiboSeq.slice(1));
// };
var nthFibo = function(n) {
  // if n is negative, return null
  if (n < 0) return null;
  // if number is 0 or 1, return that number
  else if (n < 2) return n;
  // else recurse over values of n-1 and n-2
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, capsArray = []) {
  if (input.length === 0) return capsArray;
  capsArray.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), capsArray);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, capsArray = []) {
  if (array.length === 0) return capsArray;
  capsArray.push(array[0][0].toUpperCase() + array[0].substring(1));
  return capitalizeFirst(array.slice(1), capsArray);  
};

// // 28. Return the sum of all even numbers in an object containing nested objects.
// // var obj1 = {
// //   a: 2,
// //   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// //   c: {c: {c: 2}, cc: 'ball', ccc: 5},
// //   d: 1,
// //   e: {e: {e: 2}, ee: 'car'}
// // };
// // nestedEvenSum(obj1); // 10
// var nestedEvenSum = function(obj) {
// };

// // 29. Flatten an array containing nested arrays.
// // Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
// var flatten = function(arrays) {
// };

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  let currentChar = str[0];
  if (str.length === 0) return obj;
  // if obj does have the 1st character of str as a property
  if (obj[currentChar]) {
    obj[currentChar]++;
    console.log(obj);
  // if obj doesn't include the 1st character of str as a property
  } else {
    obj[currentChar] = 1;
    console.log(obj);
  }
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, compressedList = []) {
  if (list.length === 0) return compressedList;
  if (compressedList[compressedList.length - 1] !== list[0] || compressedList.length === 0) compressedList.push(list[0]);
  return compress(list.slice(1), compressedList);
};

// // 32. Augment every element in a list with a new value where each element is an array
// // itself.
// // Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
// var augmentElements = function(array, aug) {
// };

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minimizedArray = []) {
  if (array.length === 0) return minimizedArray;
  if (array[0] !== 0) minimizedArray.push(array[0]);
  if (array[0] === 0 && minimizedArray[minimizedArray.length-1] !== 0) {
    minimizedArray.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), minimizedArray);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, altArray = [], oddIndex = false) {
  
  if (array.length === 0) return altArray;
  
  if (oddIndex === false) {
    if (array[0] > 0) {
      altArray.push(array[0]);
    } else if (array[0] < 0) {
      altArray.push(-array[0]);
    }
    oddIndex = !oddIndex;
  } else if (oddIndex === true) {
    if (array[0] > 0) {
      altArray.push(-array[0]);
    } else if (array[0] < 0) {
      altArray.push(array[0]);
    }
    oddIndex = !oddIndex;
  }
  
  return alternateSign(array.slice(1), altArray, oddIndex);
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr = '') {
  let wordNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str.length === 0) return newStr;
  // if str[0] is a character, add it to the new string
  // then recurse through spliced string
  if (isNaN(parseInt(str[0])) === true) {
    newStr = newStr + str[0];
    return numToText(str.slice(1), newStr);
  // if str[0] is a number, change to word and add to new string
  // then recurse through spliced string
  } else {
    let numIndex = parseInt(str[0]);
    newStr = newStr + wordNums[numIndex];
    return numToText(str.slice(1), newStr);
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
