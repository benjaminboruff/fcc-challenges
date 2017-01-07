/* jshint esversion: 6 */
function Person(firstAndLast) {

    var fullName = firstAndLast;
    var nameArr = firstAndLast.split(" ");
    var firstName = nameArr[0];
    var lastName = nameArr[1];


    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {

        return firstName + " " + lastName;
    };

    this.setFirstName = function(str) {
        if (typeof str === 'string') firstName = str;
    };

    this.setLastName = function(str) {
        if (typeof str === 'string') lastName = str;
    };

    this.setFullName = function(str) {
        if (typeof str === 'string') {
            fullName = str;
            nameArr = fullName.split(" ");
            firstName = nameArr[0];
            lastName = nameArr[1];
        }
    };
}

export default Person;
