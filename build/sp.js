"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sumPrimes(num) {
    var oddsUpToNum = [];
    // make array of odds
    for (var i = 3; i <= num; i++) {
        if (i % 2 !== 0) {
            oddsUpToNum.push(i);
        }
    }
    // reduce array of 2 + primes from odds
    return [2].concat(oddsUpToNum.filter(function (elem) {
        for (var _i = 0; _i < oddsUpToNum.length; _i++) {
            if (elem % oddsUpToNum[_i] === 0 && elem !== oddsUpToNum[_i]) {
                return false;
            }
        }
        return true;
    })).reduce(function (prev, curr) {
        return prev + curr;
    });
}

exports.sumPrimes = sumPrimes;