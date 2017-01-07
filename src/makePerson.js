/* jshint esversion: 6 */
class Person {
  constructor(firstAndLast) {
    let nameArr = firstAndLast.split(" ");
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  }

  

}

export default Person;
