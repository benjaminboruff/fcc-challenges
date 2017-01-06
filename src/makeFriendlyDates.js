/* jshint esversion: 6 */
function makeFriendlyDates(str) {
    //Enclosed data to be used by the internal recursive function permutate():
    let permutations = [], //generated permutations stored here
        nextWord = [], //next word builds up in here
        chars = [], //collection for each recursion level
        noRepeats = 0;

    //split words or numbers into an array of characters
    chars = str.split('');
    permutate(chars);

     // only allow strings with non-repeating chars
    let filter = /(.)\1/g;
    for (let i = 0; i < permutations.length; i++) {
        noRepeats += permutations[i].match(filter) === null ? 1 : 0;
    }
    return noRepeats;

    // recursive permutation generator
    function permutate(chars) {
        if (chars.length === 0) permutations.push(nextWord.join(''));
        for (let i = 0; i < chars.length; i++) {
            chars.push(chars.shift()); //rotate the characters
            nextWord.push(chars[0]); //use the first char in the array
            permutate(chars.slice(1)); //Recurse: array-less-one-char
            nextWord.pop(); //clear for nextWord (multiple pops)
        }
    }
}

export {
    makeFriendlyDates
};
