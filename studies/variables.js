/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use
 * variables. Variables are named identifiers that can point to values of a
 * particular type, like a Number, String, Boolean, Array, Object or another
 * data type. Variables are called so because once created, we can change the
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keywords, var, let, or const, followed by
 * a name (id or alias) for our variable.
 *
 * The var keyword is not commonly used since the release of ES6, but is
 * important to know about due to its use in older code bases.
 * var is hoisted (described below), re-declarable, re-assignable, and function
 * scoped.
 *
 * The fact that var is hoisted is a cause of some coding errors and unexpected
 * behaviors. In order to avoid this ES6 introduced two new keywords to declare
 * variables: let and const.
 *
 * The let keyword is very similar to var, but is not hoisted in the same way.
 * Unlike var, let is not re-assignable and is block scoped. Like var, let is
 * re-declarable.
 *
 * The const keyword, short for constant, is more similar to let in that it is
 * not re-assignable, is block scoped, and is not hoisted in the same way as
 * var. However, const is also not re-assignable. Constants are meant to be
 * values which are never meant to change.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or
 * assignment).
 *
 * 3. When the code starts to run, JavaScript pulls all the variables from the
 * code body to the top of the page and initializes them before actually running
 * the code. This is called hoisting. Hoisting allows variables to exist in the
 * global scope before they are actually declared in the body of code.
 *
 * let and const are not hoisted, therefore, if you try to use them before they
 * are declared the code will throw an error.
 *
 */

// 1. declaration //
var myName;
let aName;

/*
 * At the declaration phase, the variables myName and aName are undefined
 * because we have NOT initialized them to anything.
 */
 
console.log(myName); // prints => undefined
console.log(aName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

/*
* You can declare and initialize at the same time, for const, this is required.
*/

// const should only be used when the value won't change, like in this ex. //
const boilingTempCelsius = 100;
console.log(boilingTempCelsius); // prints => 100

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/*
* NOTE: We can assign and re-assign anything to a variable - we cannot do this
* with constants.
*/

var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, and const //

// var is function scoped //
var funcVar;
function aFunction() {
    funcVar = 42;
}
console.log(funcVar); // prints => undefined, since funcVar is only initialized
// inside the function

// let and const are block scoped //
if (true) {
    let blkVar1 = "This won't work";
    const blkVar2 = " outside the block.";
    console.log(blkVar1 + blkVar2 + " You have to call \nus from inside the block.");
}
/*
 * above code will log "This won't work outside the block. You have to call
 * us from inside the block."
 */

/*
 * if the following statements were not commented out, they would throw
 * reference errors. 
 * console.log(blockVar1); // These throw ReferenceErrors because these
 * console.log(blockVar2); // variables are only accessible in the code block.
 */

// 5. hoisting //

console.log(hoistedVar); // prints => undefined 
var hoistedVar = 42;
console.log(hoistedVar); // since now initialized, prints => 42

/*
 * If you did the same thing with let or const, there would be an error thrown
 * by the first line. You would not be able to reference these variables before
 * they were declared, since they are not hoisted.
 */
 