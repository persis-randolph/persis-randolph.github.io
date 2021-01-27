/**
 * LOOPS:
 *
 * 0. Loops allow us to execute a statement or block of code repeatedly, without
 * writing the instructions over, and over, and over again. You can do almost
 * anything with the help of loops!
 * 
 * 1. While Loops - These loops are used when the number of desired iterations
 * is unknown. While loops continue until a certain condition is met, but do not
 * specify the number of iterations.
 * while (this condition evaluates to true) {run this code block}
 * 
 * 2. For Loops - You'd want to use a for loop if the you know how many times
 * you'll want to iterate, or repeat, over the code block. For loops are
 * frequently used to iterate over arrays or objects. The standard syntax
 * for a for loop is:
 * for (starting point; stopping condition; change each iteration)
 *
 * 3. For In Loops - For in loops are frequently used to iterate over objects.
 * for (let key in object) is used to iterate through keys in an object.
 * The standard syntax for a for in loop is:
 * 
 * for (variable in object) {run this code block on each variable)
 * 
 * - for is the keyword indicating a loop
 * - variable can be any property/key of the object
 * - in is the keyword indicating we will be iterating through an object's keys
 * - and object is the object whose properties/keys we are iterating over
 *
 * 4. With all loops, it's important to make sure the condition will eventually
 * turn to false. If the condition never evaluates to false, the loop can run
 * forever and crash your program. This is called an infinite loop.
 * 
 */
 
// 1. While Loops //
let counter = 0;
while (counter < 5) {
    counter++
    console.log("I've looped again.") // prints => 'I've looped again' 5 times
}
 
// 2. For Loops //
// frequently used to iterate through arrays //
let myArray = [1, 2, 3];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // prints => 1 2 3 (on separate lines)
}
 
// 3. For In Loops //
// allows using the key to access each value in an object
let myObj = {a: 1, b: 2, c: 3};
for (let key in myObj) {
    console.log(myObj); // prints => 1 2 3 (on separate lines)
}