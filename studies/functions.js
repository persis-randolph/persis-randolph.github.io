/*
 * FUNCTIONS:
 *
 * 0. Functions allow us to create a block of code(instructions) to be executed
 * and to call back and execute that code whenever we would like without
 * repeating the instructions each time. Functions are similar to loops in this
 * way, but are designed to perform specific actions rather than evalutating
 * conditionally.
 * 
 * Think of this like a recipe that you follow to make a dish, you can make the
 * dish many times, but will just follow the same written instructions each
 * time.
 *
 * 1. Like variables, functions need to be declared in order to use them.
 * Function declaration can be done in several different ways - you can use
 * the function keyword (named function), assign the function to a variable or
 * constant (function expression), or use define without a name
 * and write while being passed to other functions (anonymously).
 *
 * 2. Coding a function will not automatically perform the function. You need to 
 * call (or invoke) a function in order to run the code block. This is done by
 * using the function name and parentheses filled with arguments, if applicable.
 *
 * 3. Functions will automatically return undefined unless they are given some
 * sort of return statement. Return statements run and cause an exit to the code
 * block.
 *
 * 4. Functions can work with input, these input values are represented in the
 * function declaration by values in parentheses. Called parameters, these are
 * basically placeholders for values which you will input when actually invoking
 * the function later. When calling the function, these parameters are replaced
 * by arguments.
 * 
 * 5. Functions in JavaScript as considered first-class, and therefore can be
 * used in any way you could use a variable. You can use a function in an
 * object, within another function, or even as a parameter.
 *
 * 6. Functions have the ability to access variables that are declared in the
 * global scope, but variables created inside of a function cannot be accessed
 * unless returned into a larger scope.
 *
 * Related to scope is closure. Functions form closures around the data they
 * store. If another function is returned within a function, it alone can access
 * the data from its parent function. This referenced data exists within closure
 * but cannot be referenced otherwise.
 *
 */
 
// 1. Named Functions //
// note: these types of functions are hoisted to the top of their parent scope//
function add(parameter1, parameter2) {
 return parameter1 + parameter2;
}
add(1, 2); // returns 3
 
// 2. Function Expressions //
// note: functions defined in function expressions are not hoisted //
let subtract = function(a, b) {
 return a - b;
}
console.log(subtract(2, 1)); // prints 1
 
// 3. Anonymous Functions //
// in this example, separateStrings is an anonymous function //
function separateByWord(string, separateStrings) {
 return separateStrings(string);
}
separateByWord('I am a string.', function (str) { return str.split(" ")});
// returns => [ 'I', 'am', 'a', 'string.' ]

// 4. First Class Functions //
// objects can contain functions
let myObject = {
  a: function () {return 42},
  b: 53,
  c: 64
}
console.log(myObject.a); // prints => [Function: a]

/* 
 * note: see anonymous function example above for a function as a parameter, and
 * a function within a function.
 */

// 5. Function Scope //
let var1 = 2;
function addTwo(num1) {
 let var2 = 'unaccessible outside of the function'
 return num1 + var1; 
}
addTwo(4); // returns 6
// addTwo can access var1 since it is globally scoped
/*
 * since var2 is only defined in the function, if we were to console.log(var2)
 *we would get a reference error
 */
 
// 6. Closures //
function outerFunction() {
  let outerFunctVar = 42;
  function nestedFunction() {
    console.log(outerFunctVar);
  }
  return nestedFunction();
}

let copyFunct = outerFunction();
copyFunct(); // returns 42
/*
 * outFunctVar is still accessible since it is contained in a closure with
 * nestedFunction
 */
