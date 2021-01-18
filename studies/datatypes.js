/*
 * DATA TYPES:
 *
 * 0. Data which we use in JavaScript can be one of many different types. These
 * types are grouped into two main categories, simple (or primitive) and
 * complex.
 *
 * 1. Simple, also known as primitive, data types are those which store simple
 * values, such as numbers, strings, booleans, and a few others. Simple data is
 * of a definite size, and can be copied by copying the the value itself. This
 * means that if you were to copy a simple value stored in a variable it would
 * copy just the value. If you were to change the value in one or the other
 * (original or not), one value would change, but the other would be unaffected.
 *
 * NaN (not a number), undefined, and null are also considered simple data.
 * 
 * NaN will return when you when you do math and the result is not a real
 * number. It might also return if you use it in a mathematical expression
 * itself (ex. NaN + 4 will return NaN).
 *
 * undefined means that a value has been declared, but not yet initialized. It
 * signals the absence of data stored. null is similarly absent of perceived
 * value, but requires a programmer to actually set a value to null, or remove
 * a value.
 *
 * 2. There are also data types considered Complex. Complex data types are
 * arrays, objects, and functions. Complex data is of infinite size - you
 * can continue adding data to an array, object, or function until it were to
 * cause your computer to run out data to store it. (This would be difficult to
 * actually do.) Complex data is also copied by reference rather than by value.
 * For example, if an object were to be copied and saved in a new variable, that
 * new variable would not hold a new value, it would point to the original
 * value stored in the obj. It would be the SAME object rather than a copy of
 * what was stored into it.
 *
 * Objects store key/value pairs. They are meant to describe attributes of one
 * particular thing, similarly to information about a contact in a contact book.
 * You can recognize an object by key/value pairs housed within curly braces {}.
 * 
 * Arrays are meant to be lists of related items. You might store a grocery list
 * as an array. You can recognize array by a list of items separated by commas,
 * housed within square brackets [].
 *
 * Functions are also considered complex data types as they can contain an
 * indefinite amount of statements. There are several ways to write functions,
 * but you'll generally see either a function keyword, a code block stored
 * within curly braces {}, or an arrow =>.
 *
 */
 
// A. SIMPLE DATA TYPES //
// 1. Numbers //
let num1 = 2;
let num2 = 3.14;
let num3 = -4;

/*
 * Infinity represents a number which is too infinitely large for the computer
 * to properly notate.
 */
console.log(1 / 0); // prints => Infinity
console.log(-1 / 0); // prints => -Infinity

// 2. Strings //
// Note: empty strings are still consider strings //
let emptyStr = "";
let string1 = 'This is a string.';
let string2 = "This is also a string.";

let str = 'strings'
let string3 = `String literals are also ${str}.`;

// 3. Booleans //

/* Booleans are frequently used to control loops and to determine if a code
 * block should run
 */
 
let isItTrue = true;
// since isItTrue evaluates to true, the code block will run
if (isItTrue) {
 console.log("It's true!"); // prints => It's true!
}

let notTrue = false;
if (notTrue) {
 console.log("It's true!"); // won't run since the condition is now false
}

// 4. NaN //
console.log(0 / 0); // prints => NaN
console.log(1 + NaN); // prints => NaN

// 5. undefined and null //
var a;
console.log(a); // prints => undefined

a = null;
console.log(a); // prints => null

// Note: Simple data types can be copied by value //
let var1 = 42;
let var2 = var1;
console.log(var2); // prints => 42
var2 = var2 + 1;
console.log(var2); // prints => 43
console.log(var1); // prints => 42
/*
 * since var2 took a copy of the data from var1, changing var2 does not change
 * var1.
 */


// B. Complex Data Types //
// 1. objects //
let catObject = {
 name: 'Rutabaga',
 isCat: true,
 isCute: true,
 age: 5,
 personality: 'fabulous'
};

// 2. arrays //
let catsAroundTown = ['Rutabaga', 'Pygar', 'Oopsie', 'Potato'];
// yes, these are actually names of cats I know

// 3. functions //
function thisFunct () {
 console.log("I'm a function!");
}
thisFunct(); // prints => I'm a function!

// Note: Complex data types are passed by reference //
let ogObj = {a: 1, b: 2};
let objCopy = ogObj;
objCopy.c = 3;

console.log(objCopy); // prints => {a: 1, b: 2, c: 3}
console.log(ogObj); // also prints => {a: 1, b: 2, c: 3}
/*
 * Since objCopy was changed, and points to the value of ogObj, ogObj is also
 * changed.
 */