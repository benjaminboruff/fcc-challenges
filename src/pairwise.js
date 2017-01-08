/* jshint esversion: 6 */
function pairwise(arr, arg) {
    let testArr = arr.reduce((acc, curr, currIndex, array) => {
        return array[currIndex] + array[currIndex + 1] === arg ? acc.concat([currIndex, currIndex + 1]) : acc.concat([]);
    }, []);
    console.log(testArr);
    return arg;
}

export default pairwise;
