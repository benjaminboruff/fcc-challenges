/* jshint esversion: 6 */
function binaryAgent(str) {
  return str.split(" ").map( item => String.fromCharCode(parseInt(item, 2))).join("");
}

export default binaryAgent;
