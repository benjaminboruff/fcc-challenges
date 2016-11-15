// @flow
function pairElement(str: string): [] {
    let pairs = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
    let elements = str.split("");

    return elements.map( elem => {
        return [elem, pairs[elem]];
    });
}

export { pairElement };