//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

// take an object and return its values in an array
    let array = []; // create an empty array
    
    // loop through the object's values
    for (let key in object) {
        array.push(object[key]) // add each value to the new array
    }
    
    return array; // return the new array

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

// Should take an object and return all its keys in a string each separated with a space

    // create new empty array
    let array = []
    
    // loop through object values
    for (let key in object) {
        array.push(key); // push each key into the array
    }
    
    // create a new variable, string, which is each array value in array joined by spaces
    let string = array.join(" "); 
    // return the new string
    return string;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
// Should take an object and return all its string values in a string each separated with a space
    // declare new empty array
    let array = [];
    
    // loop through object's keys
    for (let key in object) {
        
        // create value variable with the value of the object's keys
        let value = object[key];
        if (typeof value === "string") { // if the value is a string
            array.push(value); // add it to the new array
        }
    }
    
    // create a new variable, string, which joins the string values from the input object with a space
    let string = array.join(" ");
    // return new string
    return string;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
// Should take one argument and return 'array' if its an array and 'object' if its an object
// object false positives: null, array, date

    if (collection === null) { // exclude null since this is a false positive for object
        return; // if null, exit the function
    } else if (collection instanceof Date) { // exclude Date since this is a false positive for object
        return; // if date, exit the function
    } else if (Array.isArray(collection)) { // if an array
        return "array"; // return 'array'
    } else if (typeof collection === "object") { // if an object (except array, date, and null)
        return "object"; // return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
// Should take a string of one word, and return the word with its first letter capitalized

    // create newStr empty string
    let newStr = "";
    // take the 1st letter, index 0, of the input string, make it uppercase and then add it to the newStr
    newStr += string[0].toUpperCase();
    // take the remainder of the input string, index 1-the end, and concatenate it to the new string
    newStr += string.substring(1, string.length);
    
    // return newStr
    return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
// Should take a string of words and return a string with all the words capitalized

    // create empty new string "newStr"
    let newStr = "";
    
    // loop through the words of the input string(split by spaces)
    for (let word of string.split(" ")) {
        // uppercase the first character of each word and add it to the new string
        newStr += word[0].toUpperCase();
        // take the rest of each word and add it to the new string
        newStr += word.substring(1, word.length);
        // add a space after each word
        newStr += " ";
    }
    
    // return the new string, but omit the last space which is on the end
    return newStr.substring(0, newStr.length-1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

// Should take an object with a name property and return 'Welcome <Name>!'

    // set a name equal to the name property of the input object
    let name = object.name;
    
    // set a new name equal to an empty string
    let theName = "";
    // make the 1st letter of the name property uppercase and add it to the new name
    theName += name[0].toUpperCase();
    // add the rest of the name property to the new name
    theName += name.substring(1, name.length);
    
    // return welcome message with the new capitalized name inserted
    return `Welcome ${theName}!`;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

// Should take an object with a name and a species and return '<Name> is a <Species>'

    // ask jon what this is called again - basically breaking down the object into its properties so you can reference them
    let {name, species} = object;
    
    // replaced by above line which is shorter
    // let name = object.name;
    // let species = object.species;
    
    // create a new name string with the first character capitalized
    let nameStr = name[0].toUpperCase() + name.substring(1, name.length);
    // create a new species string with the first character capitalized
    let speciesStr = species[0].toUpperCase() + species.substring(1, species.length);
    
    // return new string with the capitalized name and species inserted
    return `${nameStr} is a ${speciesStr}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

/* Should take an object, if this object has a noises array return them as a string separated by a space,
if there are no noises return 'there are no noises' */
    
    // check if the input object has a noises array
    if (object.noises) {
        if (Array.isArray(object.noises) && object.noises.length > 0) {
            return object.noises.join(" ");
        }
    }
    return 'there are no noises';

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    for (let theWord of string.split(" ")) {
        if (theWord === word) {
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

// Should take a name and an object and add the name to the object's friends array then return the object
    
    if (object.friends) { // if object has friends property
        object.friends.push(name); // if it does push the name into the friends array
        return object; // return edited object
    }

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    
    // if (object.friends) console.log("object has friends property")
    // if (!object.friends) console.log("object doesn't have friends property")
    
    if (!object.friends) {
        return false;
    }

    for (let friendName of object.friends) {
        if (name === friendName) {
            return true;
        }
    }
    return false;
    
    // this didn't work:
    // if (object.friends) { // if object has friends
        
    //     // loop through friends array
    //     for (let friend of object.friends) {
    //         if (friend.name === name) {
    //             return true;
    //         }
    //     }
    //     return false;
        
    // }
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

// Should take a name and a list of people, and return a list of all the names that <name> is not friends with

    // loop through the list of people
    // pass each person into the function isFriend to test if each person isFriend to the named animal
    
    //  var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]}, object
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //  ];
    
    // jon's way
    // let friends;
    // let allPeople;
    
    // for (let person of array) {
    //     allPeople.push(person.name);
    //     if (person.name === name) {
    //         friends = person.friends;
    //     }
    // }
    
    // let outputArray;
    
    // for (let person of allPeople) {
    //     if (!friends.includes(person)) {
    //         outputArray.push(person);
    //     }
    // }
    
    // return outputArray;
    
    
    // persis way: currently not correct
    // let nonFriends = [];
    
    // for (let friendName of array) {
    //     if (!isFriend(friendName, name)) {
    //         nonFriends.push(friendName);
    //     }
    // }
    // return nonFriends;
    
    let friends = [];
    
    for (let person of array) {
        
        if (person.name === name) {
            friends = person.friends;
            console.log(friends); // should output input person's friends
        }
        
    }
    
    let names = [];
    
    for (let person of array) {
        names.push(person.name);
    }
    
    console.log(names); // should be every person in the function
    
    let returnArr = [];
    
    for (let theName of names) {
        if (!(friends.includes(theName) || theName === name)) {
            returnArr.push(theName);
        }
    }
    
    console.log(returnArr);
    
    return returnArr;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

/* Should take an object, a key and a value. Should update the property <key> on <object>
with new <value>. If <key> does not exist on <object> create it. */

// keep in mind referencing values instead of // ?

    let newObj = {...object}; // spread operator - look this up, takes every key value pair that exists in the object and copying to new object
    
    // or you could make a new object and iterate over the keys of the old object
    
    newObj[key] = value;
    
    return newObj;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

// why does this allow us to remove data in changing an object, but not update the values

    for (let prop of array) {
        if(object.hasOwnProperty(prop)) {
            delete object[prop];
        }
    } 

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

// Should take an array and return an array with all the duplicates removed

    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    
    return newArray;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}