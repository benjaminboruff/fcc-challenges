/* jshint esversion: 6 */
function dropElements(arr, func) {
    let firstElement = arr.filter(func).shift();
    if (firstElement === undefined) {
      return [];
    } else {
      let index = arr.indexOf(firstElement);
      return arr.slice(index, arr.length);
    }
}

export default dropElements;
