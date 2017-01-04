/* jshint esversion: 6 */
function telephoneCheck(str) {
  const regExpPattern = /^1{0,1}\s{0,1}(\([0-9]{3}\)\s{0,1}|[0-9]{3})(-{0,1}|\s{0,1})[0-9]{3}(-{0,1}|\s{0,1})[0-9]{4}$/;
  let matched = str.match(regExpPattern);
  return matched === null ? false : matched[0] === str ?  true : false;
}

export default telephoneCheck;
