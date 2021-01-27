// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underscore');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//Objective: Find the number of male customers
//Input: Array
//Output: Number
//Constraints: use filter

var maleCount = function(array) {
    
    let maleNumbers = _.filter(array, function(customerObj) {
        
        return customerObj.gender === 'male';
    
    });
    
    return maleNumbers.length;
};




//Objective**: Find the number of female customers
//Input**: `Array`
//Output**: `Number`
//Constraints**: use `reduce`

var femaleCount = function(array) {
    
    return _.reduce(array, function(memo, customerObj) {
        
        if (customerObj.gender === 'female') {
            return memo + 1;
        } else {
            return memo;
        }
        
    }, 0);
    
};


//Objective**: Find the oldest customer's name
//Input**: `Array`
//Output**: `String`
//Constraints**:

var oldestCustomer = function(customers) {
    
    let oldestCustomer =  _.reduce(customers, function(oldestCustomer, customer) {
        if (customer.age > oldestCustomer.age) {
            oldestCustomer = customer;
        }
        return oldestCustomer;
    });
    
    return oldestCustomer.name;
    
};


//**Objective**: Find the youngest customer's name
//**Input**: `Array`
//**Output**: `String`
//**Constraints**:
var youngestCustomer = function(customers) {

    let youngestCustomer =  _.reduce(customers, function(youngestCustomer, customer) {
        if (customer.age < youngestCustomer.age) {
            youngestCustomer = customer;
        }
        return youngestCustomer;
    });
    
    return youngestCustomer.name;
};

//Objective**: Find the average balance of all customers
//*Input**: `Array`
//Output**: `Number`
//Constraints**:
var averageBalance = function(customers) {
    
    let total = _.reduce(customers, function(total, customer) {
        return total + parseFloat(customer.balance.slice(1).replace(',',''));
    }, 0);
    
    return total / customers.length;
    
};

//*Objective**: Find how many customer's names begin with a given letter
//*Input**: `Array`, `Letter`
//*Output**: `Number`
//*Constraints**:
var firstLetterCount = function(customers, char) {

    let newCustomers =  _.filter(customers, function(customer) {
        return customer.name[0].toLowerCase() === char.toLowerCase();
    });
    
    return newCustomers.length;
};

//*Objective**: Find how many friends of a given customer have names that start with a given letter
//*Input**: `Array`, `Customer`, `Letter`
//*Output**: `Number`
//*Constraints**:

// "friends": [{
//     "id": 0,
//     "name": "Justice Lara"
//   }, {
//     "id": 1,
//     "name": "Duke Patrick"
//   }, {
//     "id": 2,
//     "name": "Herring Hull"
//   }, {
//     "id": 3,
//     "name": "Johnnie Berg"
//   }],

var friendFirstLetterCount = function(customers, customer, char) {
    
    let names = [];
    
    _.each(customers, function(customer) {
        names.push(customer.name);
    });
    
    let customerIndex = _.indexOf(names, customer);
    
    return _.reduce(customers[customerIndex].friends, function(count, customer) {
        if (customer.name[0].toLowerCase() === char.toLowerCase()) {
            ++count;
        }
        return count;
    }, 0);
    
};

//*Objective**: Find the customers' names that have a given customer's name in their friends list
//*Input**: `Array`, `Name`
//*Output**: `Array`
//*Constraints**:
var friendsCount = function(customers, friendName) {
    
    // another method, each, pluck, .includes
    // another method - filter
    
    // look in each customers object, then into their friends array, and then inside each friend object
    // who has olga or whomever in their friends array?
    let resultArr = _.filter(customers, function(customerObj) {
        // for loop or includes
        // lets define the friends array from each customer object
        let customerObjFriendsArr = customerObj.friends;
        
        // look through each friends array and see if the customer is inside of it
        for (let i=0; i < customerObjFriendsArr.length; i++) {
            if (customerObjFriendsArr[i].name === friendName) {
                return customerObj;
            }
        }
    });
    
    return _.pluck(resultArr, "name");
    
    
//     // reduce customers' names to a customerNames array
//     return _.reduce(customers, function (customerNames, customer) {
//         // reduce friend's of each customer to a friends names' array
//         let friendsNames = _.reduce(customer.friends, function(friendsNames, friend) {
//             // add each friend on the friends array of each customer to a bigger friends array
//             return friendsNames.concat(friend.name);
//         }, []);
//         // if the friends name array contains the input friend's name
//         if (_.contains(friendsNames, friendName)) {
//             // add that customer's name to the customerNames list
//             customerNames = customerNames.concat(customer.name);
//         }
//         // return the list of customers who have the given customer as their friend
//         return customerNames;
//     }, []);
};

//*Objective**: Find the three most common tags among all customers' associated tags
//*Input**: `Array`
//*Output**: `Array`
//*Constraints**:

//"tags": ["cupidatat", "do", "irure", "proident", "sit", "nulla", "aute"],

var topThreeTags = function(customers) {
    
    // create a tagTally object using reduce
    // reduce on customers list, using tagTally as the accumulator
    // customer as each current value
    let tagTally = _.reduce(customers, function(tagTally, customer) {
        // for each customer's tags
        _.each(customer.tags, function(tag) {
            // if the tag exists in the tagTally object already
            if (tagTally[tag]) {
                // increment the value by one
                tagTally[tag]++;
            // if the tag doesn't exist in the tagTally object yet
            } else {
                // declare it in the object and set it to a value of 1
                tagTally[tag] = 1;
            }
        });
        // return the tagTally object
        return tagTally;
    }, {});
    
    // convert the tagTally object to an array
    // Object.entries(obj) => returns an array of the obj's key/value pairs
    let tagTallyArr = Object.entries(tagTally);
    
    // sort the tagTallyArr by ascending value of each tag
    tagTallyArr.sort(function(a,b) {
        // accessing number value of each tag in the array
        return b[1] - a[1];
    });
    // now i should have an array that looks like this: [["tag1",6], ["tag2",5], etc...]
    
    // use reduce to take 1st three tags from the tagTallyArr
    return _.reduce(tagTallyArr, function(top3TagsArr, tag, index) {
        // if index 1-3 of the tagTallyArr
        if (index <= 2) {
            // add the tag value of that element to the new top3TagsArr
            top3TagsArr = top3TagsArr.concat(tag[0]);
        }
        // return the top 3 tags as an array
        return top3TagsArr;
    }, []);
    
};

//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`
let genderCount = function(customers) {

    // reducing values of customer.gender to make a genderObj
    // accumulator is the genderObj
    // using the values of each customer.gender
    return _.reduce(customers, function(genderObj, customer) {
        // if genderObj contains the gender already
        if (genderObj[customer.gender]) {
            // add one to its value
            genderObj[customer.gender]++;
        // if gender is not already in genderObj
        } else {
            // add it to the genderObj and set its value to 1
            genderObj[customer.gender] = 1;
        }
        // return the genders and counts of each as an object
        return genderObj;
    }, {})
}

// var wordCount = words.reduce(function (acc, curVal, index, words) {
//   // we'll start with an empty object and we'll add to it
//   // if the word is already in our final object
//   if (acc[curVal]) {
//     // add one to the count
//     acc[curVal]++;
//   // if current word isn't in the object yet
//   } else {
//     // add it with a value of one
//     acc[curVal] = 1;
//   }
//   // return the final object
//   return acc;

// }, {});

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
