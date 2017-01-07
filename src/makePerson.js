/* jshint esversion: 6 */
class Person {
    constructor(firstAndLast) {
        this.fullName = firstAndLast;
        let nameArr = this.fullName.split(" ");
        this.firstName = nameArr[0];
        this.lastName = nameArr[1];
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    setFirstName(str) {
        if (typeof str === 'string') this.firstName = str;
    }

    setLastName(str) {
        if (typeof str === 'string') this.lastName = str;
    }

    setFullName(str) {
        if (typeof str === 'string') {
            this.fullName = str;
            let nameArr = this.fullName.split(" ");
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        }
    }

}

export default Person;
