/*
 * OPERATORS:
 *
 * 0. Operators in JavaScript are used to take action on our data - changing or
 * comparing values.
 * 
 * 1. Assignment Operators - These are operators that are used to assign values
 * to variables. The most common is =. The = sign is used in between a variable
 * and a value to indicate the value is being stored or pointed to by the
 * variable.
 * +=, -=, *-, and /= are also some common assignment operators. These can also
 * be considered arithmetic operators because they take mathmatical action, but
 * then also assign the resultant value to the variable.
 *
 * 2. Arithmetic operators - These are operators used to take mathematic action
 * on a value or values. Some of the most common are:
 *
 * Addition operator: +
 * Subtraction operator (or negation): -
 * Multiplication operator: *
 * Division operator: /
 * Modulo or the remainder operator: %
 * 
 * Most of these act as they would in normal calculations, but % may not be
 * familiar to non-coders. % or the modulo operator is used to find the
 * remainder after dividing the second value into the first. Example included
 * in the examples section.
 * 
 * 3. Comparison operators - These are operators that are used to compare values
 * and then return true or false. Some comparison operators are less
 * than, denoted as <, greater than: >, less than or equal to: <=, greater than
 * equal to: >=, equal to (loosely): ==, strictly equal to: ===, and not equal
 * to: !==.
 *
 * These values can be used simply to output true or false, or to be used as
 * part of a greater conditional statement that takes action depending on the
 * values returning true or false.
 *
 * 4. Logical operators - There are 3 logical operators, and, or, and not.
 * Written in JavaScript respectively as &&, ||, and !. Similarly to comparison
 * operators, these are used logically to solve to a boolean value, true or
 * false.
 *
 * 5. Unary operators - Some of the above operators can be considered unary
 * operators, meaning, they act on a single value to perform an operation.
 * 
 * On example is the not, or ! operator, which works on just one value to return
 * the opposite. Another is typeof, which assesses a single value and returns
 * the datatype of the value (string, number, object, array, etc.). Another is
 * negation. Negation uses the same - sign as subtraction, but acts on a value
 * to make it negative.
 *
 * ++ and -- would also be considered unary operators. They act on one value and
 * either increment or decrement that value by 1.
 *
 * 6. Ternary operators - Whereas unary operators act on just a single value,
 * and binary operators act on two values (comparison, arithmetic, etc.), there
 * also ternary operators, which act on three values. There is only one example
 * of this which looks like a ? b : c.
 * In this syntax, a is a condition where, if truthy, evaluates to b, and if
 * falsy, evalutates to c.
 * 
 */
 
 
// 1. Assignment Operators //
var value = 42;
let assignment = 5;
const CONSTANT = 3;

console.log(`value is: ${value} assignment is: ${assignment}`);
// prints => "value is: 42 assignment is: 3;"

console.log(`CONSTANT is: ${CONSTANT}`); // prints => "CONSTANT is: 3"


// 2. Arithmetic Operators //

value = 5 + 2;
console.log(value); // prints => 7

value = 42 - 7;
console.log(value); // prints => 35

value = 4 / 2;
console.log(value); // prints => 2

value = 2 * 2;
console.log(value); // prints => 4

value = 5 % 2;
console.log(value); // prints => 1

 
// 3. Comparison Operators //

console.log(2 < 4); // prints => true

console.log(2 > 4); // prints => false

console.log(5 >= 5); // prints => true

console.log(6 <= 5); // prints => false

console.log(1 == '1'); // prints => true

console.log(1 === '1'); // prints => false

console.log(1 !== 1); // prints => false

/*
 * you can also use comparison operators on string values
 * those with "lower" values are closer to the beginning of the alphabet
 */
console.log('a' > 'b'); // prints => false

 
// 4. Logical Operators //

// && (and) //
let num = 5;
if (num > 1 && num === 6) {
 // since num does not fulfill both of the above conditions this code block is
 // skipped
 console.log(num);
} else {
 console.log(false); // prints => false
}

// || (or) //
if (num > 1 || num === 6) {
 // since num does fulfill one of the above conditions, we run this code block
 console.log(num); // prints => 5
 // this code block is skipped
} else {
 console.log(false);
}

// ! (not) //
console.log(!true); // prints => false
 
 
// 5. Unary Operators //

console.log(!false); // prints => true;

console.log(typeof 'alakazam!'); // prints => string
console.log(typeof 42); // prints => number
console.log(typeof true); // prints => boolean
console.log(typeof {}); // prints => object

num = 42;
num ++;
console.log(num); // prints => 43
num--;
console.log(num); // prints => 42

 
// 6. Ternary Operators //

console.log(true ? 'We evaluted to true.' : 'No, we did.');
// prints => We evaluated to true.

console.log(false ? 'We evaluated to true.' : 'No, we did.');
// prints => No, we did.
