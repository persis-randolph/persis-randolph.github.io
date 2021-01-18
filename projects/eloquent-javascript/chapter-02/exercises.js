
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(numOfLines) {
  
// use console.log to add a # sign each line
/*

  should look like:

  #
  ##
  ###
  ####
  #####
  ######
  #######

*/

  // loop starting with 1 # sign, each iteration add a # sign, stop when the number of # signs equals the input number
  for (let i = '#'; i.length <= numOfLines; i += '#') {
    // log the correct amount of # signs to the console
    console.log(i);
  }


}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
    // loop through the numbers 1-15
    for (var i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // if number is a multiple of 3 and 5 print 'fizzbuzz'
            console.log('fizzbuzz');
        } else if (i % 3 === 0) { // if number is a multiple of 3
            console.log('fizz');
        } else if (i % 5 === 0) { // if number is a multiple of 5
            console.log('buzz');
        } else {
            console.log(i); // otherwise, just print the number
        }
    }  
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  
/* Write a program that creates a string that represents an 8×8 grid,
using newline characters to separate lines. At each position of the grid
there is either a space or a "#" character. The characters should form a
chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height. */

  // create a chessboard empty string
  let chessboard = "";

  // using a for loop, loop through starting at 0
  // add one each time
  // until the height reaches the designated size
  for (let height = 0; height < size; height++) {
    // using a for loop, loop through starting at 0
    // add one each time
    // until the width reaches the designated size
    for (let width = 0; width < size; width++) {
      // if width + height is an even number
      if ((width + height) % 2 == 0) {
        // add a space
        chessboard += ' ';
      } else { // if an odd number
        chessboard += '#'; // add a # sign
      }
    }
    // after reaching the designated width, move to a new line
    chessboard += "\n";
  }

  // log the chessboard to the console
  console.log(chessboard);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
