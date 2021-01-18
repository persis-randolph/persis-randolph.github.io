/*
 * STRING MANIPULATION:
 *
 * 0. Strings, that is, characters grouped together between single quotes,
 * double quotes, or back-ticks, can be manipulated using quite a few
 * JavaScript methods.
 *
 * 1. Strings are zero-indexed. As such, you can access individual characters of
 * strings using bracket notation. This is useful when manipulating strings as
 * you can then use bracket notation to indicate specific characters or
 * substrings that need to be manipulated.
 *
 * 2. You can manipulate strings using the concatenation operator, the + sign,
 * which is the same operator used in addition. 'string1' concatenated with
 * 'string2' would resolve to 'string1string2'.
 *
 * 3. While concatenation can be done using the + operator, you can also use a
 * string method called concat(). concat() works very similarly to using the +
 * operator, but in this case you would put the two string you would like to
 * concatenate as arguments when calling the concat() method. See examples
 * below.
 *
 * 4. Like concat, there are many other methods you can use to manipulate
 * strings. Some examples include:
 *
 * indexOf() - returns the index of the input value in the string (if multiple
 * occurrences, 1st time it appears in the string), or -1 if the not found in 
 * the string
 *
 * toUpperCase() - returns the input string in all uppercase letters
 *
 * toLowerCase() - returns the input string in all lowercase letters
 *
 * split() - splits a string into an array separated by an input character
 *
 * includes() - checks to see if a string includes a certain character or
 * group of characters
 *
 * substring() - returns a portion of the string using two parameters, starting
 * index, and ending index (which is does not include)
 * 
 */
 
// 1. With Operators //

console.log ('First part. ' + 'Second part.')
// prints => First part. Second part.

 
// 2. With String Methods //


// indexOf() //
let animalString = 'elephant';
console.log(animalString.indexOf('l')); // prints => 1

/*
 * note: indexOf searches for the first occurrence of a character, it does not
 * return the 'e' at index position 2.
 */
console.log(animalString.indexOf('e')); // prints => 0

console.log(animalString.indexOf('f')); // prints => -1


// toUpperCase() //
console.log(animalString.toUpperCase()); // prints => ELEPHANT

// you can use index numbers to manipulate just one character
console.log(animalString[0].toUpperCase()); // prints => E


// toLowerCase() //
/*
 * String manipulation can be very useful if a user inputs something in a format
 * you would not traditionally expect or desire. In this example, we use
 * toLowerCase() to make goose appear how we'd like it in our data, rather than
 * the weird mixed case string that the user might have input.
 */
let anotherAnimal = 'GoOsE';
console.log(anotherAnimal.toLowerCase()); // prints goose


// split() //
// note: string literals can also be manipulated using string methods //
let value = "string literal";
let string = `This is a ${value}.`;
console.log(string); // prints => This is a string literal.
let newString = string.split(" ");
console.log(newString); // prints => [ 'This', 'is', 'a', 'string', 'literal.' ]

// includes() //
let includesString = 'This string sure includes a lot of words.';
console.log(includesString.includes('sure')); // prints => true
console.log(includesString.includes('am i in there?')); // prints => false

// substring() //
console.log(includesString.substring(5,11)); // prints => string
