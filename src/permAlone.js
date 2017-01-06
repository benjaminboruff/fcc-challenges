/* jshint esversion: 6 */
var seed = true;

function permAlone(str) {
    let numSwaps = factorial(str.length) / 2;
    let list = [];
    let noRepeats = 0;

    console.log(numSwaps);
    for (let i = 0; i < numSwaps / str.length; i++) {
        //let tmpStr = str;
        console.log("*****SET*****: " + i);
        let tmpArr = swapSet(str);
        console.log(tmpArr[tmpArr.length - 1]);
        list.push(tmpArr);
        //swapSet(tmpArr[tmpArr.length - 1]);
        str = tmpArr[tmpArr.length - 1];
    }

    console.log(list);
    let reduced = list.reduce((a, b) => {
        return a.concat(b);
    }, []);
    let filter = /(.)\1/g;
    for (let i = 0; i < reduced.length; i++) {
        noRepeats += reduced[i].match(filter) === null ? 1 : 0;
    }
    //console.log(reduced);
    console.log(noRepeats * 2);
    return noRepeats * 2;
}

function swapSet(str) {
    let arr = [];
    if (seed) {
        arr.push(str);
        seed = false;
    }
    for (let i = 1; i < str.length; i++) {
        str = swapTwo(str, i - 1, i);
        arr.push(str);
    }
    if (!seed || seed === undefined) {
        str = swapTwo(str, str.length - 2, str.length - 1);
        arr.push(str);
    }

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

export {
    permAlone,
    swapTwo,
    swapSet
};
