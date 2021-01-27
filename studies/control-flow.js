/**
 * CONTROL FLOW:
 *
 * 0. Code generally executes from top to bottom, except in the case of
 * conditional statements. These are designed to control the flow in different
 * ways. These conditional statements create branches in our code which can
 * execute based upon the set condition. They complete different actions
 * depending on how these conditions evaluate.
 *
 * Note: Truthy means an expression which evaluates to values which are
 * considered true. This would be any string which isn't empty, numbers other
 * than 0, true, or objects or arrays with contents. Falsy is the opposite.
 * Falsy includes 0, false, undefined, null, or NaN.
 *
 * 1. If statements allow us to take (or skip) action depending on whether an
 * expression evaluates to truthy or falsy.
 *
 * 2. Else if statements allow us to test multiple conditions, taking action
 * from top to bottom only if a statement evaluates to truthy for each code
 * block. If an else if statement has a conditional that resolves to true, the
 * code block will be run, and the others will be skipped. If if resolves to
 * false, that code block will be skipped, and will move on to the next else if
 * or else statement. We can have as many else if statements as we want,
 * however, only one can be run.
 * 
 * In comparison to if you were to use multiple if statements -- each one could
 * have it's own code block that would run depending on the conditional being
 * true, but if they were chained as else ifs only the first one that was true
 * would run.
 *
 * 3. Else statements allow us to perform an action if none of the above if, or
 * else if, statments evaluate to truthy. This is kind of similar to a default
 * response if none of the tested conditions are met.
 *
 * 4. In switch statements, the given condition is tested and its value is
 * compared to all the cases listed below it. If the condition matches any
 * of the cases, the code block is executed. If not, the code block is skipped.
 * There can also be a default case, for any conditions which do not match
 * a defined case.
 *
 */
 
// 1. If //
if (true) {
 console.log("It's true!") // prints => It's true!
}
 
// 2. Else-if //
let num = 5;
if (num > 5) {
 console.log("Num is greater than 5"); // skipped since the condition is falsy
} else if (num <= 5) {
 console.log("Num is 5 or less"); // prints => Num is 5 or less
} else if (num === 5) {
 console.log("Num is equal to 5"); /* with else if statements, even though this
 conditional is true, since a previous code block already returned true, it will
 not be run. */
}


 
// 3. Else //
let value = false;
if (value === true) {
 console.log("It's a truthy value!") // skipped since the exp evaluates to false
} else {
 console.log("It's a falsy value.") // prints => It's a falsy value.
}
  
// 4. Switch //
let weather = 'cloudy'
switch (weather) {
 case 'sunny': // skipped
  console.log('Let\'s go outside!')
  break;
 case 'rainy': // skipped
  console.log('Let\'s stay dry inside')
  break;
 case 'cloudy': // we take this path since it matches the condition
  console.log('We can go out or stay in') // prints => We can go out or stay in
  break; // exits the code block
 default:
  console.log('What kind of weather is that?')
  break;
}
