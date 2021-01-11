// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contact objects. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        // input is id
        // input nameFirst
        // input nameLast
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api (method) for a hint:
     */
     
    // needs to be an array since we are using .length
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            var separatedNames = fullName.split(" "); // split the full name input into an array of first and last name
            // loop through the contacts array and see if the first name and last name matches any of the contacts
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst === separatedNames[0] && contacts[i].nameLast === separatedNames[1]) { // if matches both first and last name
                    return contacts[i]; // return that contact
                }
                return undefined; // if not, return undefined
            }
        },
        //takes a contact object to be removed from the contact-list
        removeContact: function(contact) {
            // loop through contacts
            for (var i = 0; i < contacts.length; i++) {
              if (contacts[i] === contact) { // if the contact is the same as the input contact
                //delete contacts[i] from contacts array
                //splice - starting at index i, delete one item
                contacts.splice(i, 1);
              }
            }
        },
        //The printAllContactNames() Function should 
        //return a String formated with all the full-names of the separated with a line-break
        printAllContactNames: function() {
            //loop through contacts
            //if index = 0, print nameFirst + space + nameLast
            //if any higher index, print line break, then name as above
            var printedNames = ""
            for (var i = 0; i < contacts.length; i++) {
                if (i === 0) {
                    printedNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                } else {
                    printedNames += '\n' + contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                }
            }
            return printedNames;
            
            
            //TESTS
            //it('Should have an printAllContactNames API that returns new-line separated String of all full-names of contacts', function() {
            // var contacts = makeContactList();
            // contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
            // contacts.addContact(makeContact('2', 'John', 'Fraboni'));
            // expect(contacts.printAllContactNames()).to.equal('Max Gaudin\nJohn Fraboni');
            // contacts.addContact(makeContact('3', 'Olivia', 'Sabo-Rush'));
            // expect(contacts.printAllContactNames()).to.equal('Max Gaudin\nJohn Fraboni\nOlivia Sabo-Rush');
            //});
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
