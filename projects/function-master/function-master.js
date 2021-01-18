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
    
    // return the new array as a string, with each array key joined together by spaces
    return array.join(' ');

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
    
    // join together the array's values into a string with spaces in between each value, return that string
    return array.join(" ");
    
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

    // deconstruct object, breaking down the object into its properties so you can reference them
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
        // if the object has a noises array and it isn't empty
        if (Array.isArray(object.noises) && object.noises.length > 0) {
            // return the strings separated by spaces
            return object.noises.join(" ");
        }
    }
    // if it doesn't meet the above condition, return "there are no noises"
    return 'there are no noises';

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    // loop through words of the input string, which are split apart by spaces
    for (let theWord of string.split(" ")) {
        // if the word in the loop matches the iput word, i.e. if it exists in the input string
        if (theWord === word) {
            // return true as our output
            return true;
        }
    }
    // if the input word does not match any word in the string, return false as our output
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

// Should take a name and an object and add the name to the object's friends array then return the object
    
    if (object.friends) { // if object has friends property
        object.friends.push(name); // if it does push the name into the friends array
    }
    // return edited object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    
    // if (object.friends) console.log("object has friends property")
    // if (!object.friends) console.log("object doesn't have friends property")
    
    // if object doesn't have a friends property
    if (!object.friends) {
        // return false and exit the function
        return false;
    }

    // loop through the names of friends within the input object's friends list
    for (let friendName of object.friends) {
        // if the input name matches a name on the input object's friends list
        if (name === friendName) {
            // return true as our output and then exit the function
            return true;
        }
    }
    // if the above conditions has a friends property, but the name doesn't match anyone's friends lists, return false as our output
    return false;
    
    // this didn't work:
    // if (object.friends) { // if object has friends
        
    //     // loop through friends array
    //     for (let friend of object.friends) {
    //         if (friend === name) {
    //             return true;
    //         }
    //     }
    //     return false;
        
    //}
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

// Should take a name and a list of people, and return a list of all the names that <name> is not friends with

    // solution discussed in tutoring, much more efficient
    // declare notFriends array to be returned later
    let notFriends = [];

    // loop through array to get access to each object in the array

    for (let i = 0; i < array.length; i++) {
        // check to see if name is not the name from the object
        // check to see if the name is not inside of the friends array
        if (array[i].name !== name && !array[i].friends.includes(name)) {
            // push people who do not have name inside of their friends array into the notFriends array
            notFriends.push(array[i].name);
        }
    }
    return notFriends;

    // loop through the list of people
    // pass each person into the function isFriend to test if each person isFriend to the named animal
    
    //  var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]}, object
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //  ];
    
    // persis way: currently not correct - look at this again and make it work
    // let nonFriends = [];
    
    // for new solution attempt: try loop to use isFriend function
    // c'era's solution included array[I].name === name || array[I].friends.includes(name)
    // for (let friendName of array) {
    //     if (!isFriend(friendName, name)) {
    //         nonFriends.push(friendName);
    //     }
    // }
    // return nonFriends;
    
    
    // **** long solution ****
    // declare/create an empty array of friends
    // let friends = [];
    
    // // loop through the people in the input array (names you are checking if they are friends)
    // for (let person of array) {
        
    //     // if the name of a person from the input array matches the input name
    //     if (person.name === name) {
    //         // add that person's name to the friends friends array
    //         friends = person.friends;
    //         // testing: should output input person's friends
    //         console.log(friends);
    //     }
        
    // }
    
    // // declare a new array of names - all people
    // let allPeople = [];
    
    // // loop through each person of the input array (names you are checking if they are friends)
    // for (let person of array) {
    //     // push each persons name from the array into the new names array
    //     allPeople.push(person.name);
    // }
    
    // // testing: should be every person in the function
    // console.log(allPeople);
    
    // // declare a new empty array which will contain the names of non-friends
    // let nonFriends = [];
    
    // // loop through the names array created above (all people involved in the function)
    // for (let theName of allPeople) {
        
    //     // if (friends array contains the name of the person, or the name of the person matches the input name) returns false
    //     if (!(friends.includes(theName) || theName === name)) {
    //         // add that persons name to the non friends list (nonFriends array)
    //         nonFriends.push(theName);
    //     }
    // }
    
    // // testing: should return all people who are not the input person, and not in the input person's friends array
    // console.log(nonFriends);
    
    // // return the list of people who are not the input person's friends array as output
    // return nonFriends;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

/* Should take an object, a key and a value. Should update the property <key> on <object>
with new <value>. If <key> does not exist on <object> create it. */

// keep in mind, copying by reference, not by value

    // // create a new object, a cloned version of the input object
    // let newObj = {...object}; // spread operator - takes every key value pair that exists in the object and copying to new object
    // // or you could make a new object and iterate over the keys of the old object
    
    // // add the input key value pair to the object, or change the stored value if the key already exists
    // newObj[key] = value;
    
    // // return the new edited object as output
    // return newObj;
    
    // you don't need to copy the object
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

// why does this allow us to remove data in changing an object, but not update the values - read more about this

    // loop through the properties contained in the array
    for (let prop of array) {
        // if the input object has one of the properties we are looping through
        if(object.hasOwnProperty(prop)) {
            // delete that property
            delete object[prop];
        }
    } 

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

// Should take an array and return an array with all the duplicates removed

    // declare a new array
    let newArray = [];
    
    // loop through the array starting at the zero-index and stopping at the last indexed value, incrementing by 1 each time
    for (let i = 0; i < array.length; i++) {
        // if the new array doesn't include the value at the current index
        if (!newArray.includes(array[i])) {
            // add that value to the new array
            newArray.push(array[i]);
        }
    }
    
    // return this new array as output
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