/* jshint esversion: 6 */
function pairwise(arr, arg) {
    let usedIndices = [];
    let pairs = [];
    // create array of pairs of indices that sum to arg
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                // if sum of indices match arg, don't reuse them in further iterations
                if (!usedIndices.includes(i) && !usedIndices.includes(j)) {
                    usedIndices.push(i, j);
                    pairs.push([i, j]);
                }
            }
        }
    }

    return sumPairs(pairs);
}

function sumPairs(pairs) {
    return pairs.reduce((prev,curr) => prev + curr[0] + curr[1], 0);;
}

export default pairwise;
