/* jshint esversion: 6 */
function permAlone(str) {
    let numSwaps = factorial(str.length) / 2;
    let list = [];
    let noRepeats = 0;

    console.log(numSwaps);
    for (let i = 0; i < numSwaps / str.length; i++) {
        console.log("*****SET*****: " + i);
        list.concat(swapSet(str));
        // for (let j = 0, k = -1; j < str.length; j++, k++) {
        //     if (k === -1) {
        //         console.log("ONE TIME ONLY: " + str + '(0,0)');
        //         let tmp = swap(str, 0, 0);
        //         list.push(tmp);
        //         str = tmp;
        //     } else if (j === str.length - 1) {
        //         console.log('***END*** ' + str + '(' + j + ',' + k + ')');
        //         let tmp = swap(str, j, 0);
        //         console.log(tmp);
        //         list.push(tmp);
        //         str = tmp;
        //     } else {
        //         console.log(str + '(' + k + ',' + j + ')');
        //         let tmp = swap(str, k, j);
        //         console.log(tmp);
        //         list.push(tmp);
        //         str = tmp;
        //     }
        // }
    }
    console.log('***************************');
    console.log("THIS: " + swapTwo('aabb', 0, 0));
    console.log("THIS: " + swapTwo('aabb', 0, 1));
    console.log("THIS: " + swapTwo('aabb', 1, 2));
    console.log("THIS: " + swapTwo('abab', 2, 3));
    //console.log("THIS: " + swapTwo('abba', 3, 0));

    let filter = /(.)\1/g;
    for (let i = 0; i < list.length; i++) {
        noRepeats += list[i].match(filter) === null ? 1 : 0;
    }
    console.log(list);
    console.log(noRepeats * 2);
    return noRepeats * 2;
}

function swapSet(str) {
  let l
  let arr = [];
  return arr;
}

function swapTwo(str, index1, index2) {
    let arr = str.split("");
    // console.log("PRE-SWAP ARRAY: " + arr);
    let x = arr[index1];
    //console.log(x);
    let y = arr[index2];
    //console.log(y);
    arr[index1] = y;
    arr[index2] = x;
    //console.log("POST-SWAP ARRAY: " + arr);
    return arr.join("");
}

function factorial(num) {
    // only positive numbers
    if (num < 0) {
        return -1;
    }

    if (num === 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

export { permAlone, swapTwo, swapSet };
