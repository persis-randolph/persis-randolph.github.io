/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input a paramater which is an array (animals)
// another which is a string, the name of the animal
function search(animals, name) {
    
    //looping through the array and searching for a matching animal
    for (var animal of animals) {
        if (animal.name === name) {
            return animal; //if we find the animal we return the object
        }
    }
    return null; //if we don't find the animal return null
    
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called replace
// inputs/parameters: animals (array), name(string), replacement(object)
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) { // if an animal with the same name as name input exists
            animals[i] = replacement; // replace that name with the input replacement object
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called remove
// input: animals (array) and name (string)
function remove(animals, name) {
    
    // loop through animals array
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) { // if input name matches name of animal in the array
            animals.splice(i, 1); // remove animal
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create function called add
// input: animals(array), and animal(object)
function add(animals, animal) {
    
    if (animal["name"].length === 0) { // if animal does have a name property but its length <= 0
        return; // exit function
    }
    
    if (animal["species"].length === 0) { // if animal object has species property but its length <= 0
        return; // exit function
    }
    
    for (var theAnimal of animals) { // loop through animals
        if (theAnimal.name === animal.name) { // check that name matches another animal name
            return; // if it already exists, exit
        }
    }
    
    animals.push(animal); // if all above conditions are met then add the animal to the array
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
