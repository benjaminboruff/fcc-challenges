/* jshint esversion: 6 */
function truthCheck(collection, pre) {
  return collection.every( elem => Boolean(elem[pre]));
}

export default truthCheck;
