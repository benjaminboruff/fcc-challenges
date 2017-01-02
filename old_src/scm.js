/* jshint esversion: 6 */
function smallestCommons(arr) {
    let sequenceOfNums = [];

    arr.sort((a, b) => a - b);
    for(let i = arr[0]; i <= arr[1]; i++) {
      sequenceOfNums.push(i);
    }

    let scm = sequenceOfNums[0];
    sequenceOfNums.map((num) => {
      scm = lcm(scm, num);
    });

    return scm;
}

function lcm(a, b) { return (a * b) / gcd(a, b); }

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

export default smallestCommons;
