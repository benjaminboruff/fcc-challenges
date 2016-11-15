"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sumFibs(num) {
    var fibs = [1, 1];
    var oddFibs = [];
    // make fib numbers
    for (var i = 2; i < num; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    // make array of odd fibs <= num
    for (var _i = 0; fibs[_i] <= num; _i++) {
        fibs[_i] % 2 !== 0 ? oddFibs.push(fibs[_i]) : "skip it!";
    }
    // sum odd array of fibs <= num
    return oddFibs.reduce(function (prev, curr) {
        return prev + curr;
    });
}

exports.sumFibs = sumFibs;