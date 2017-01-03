/* jshint esversion: 6 */
function steamrollArray(arr) {
  return [].concat.apply([], arr.map(item => Array.isArray(item) ? steamrollArray(item) : item));
}

export default steamrollArray;
