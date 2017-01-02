/* jshint esversion: 6 */
function findElement(arr, func) {
    return arr.filter(func).shift();
}

export default findElement;
