"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function uniteUnique(arr) {
    var args = Array.from(arguments);
    return args.reduce(function (prev, curr) {
        var _loop = function _loop(i) {
            var elemIndex = curr.findIndex(function (elem) {
                return elem === prev[i];
            });
            if (elemIndex !== -1) {
                curr.splice(elemIndex, 1);
            }
        };

        for (var i = 0; i < prev.length; i++) {
            _loop(i);
        }
        return prev.concat(curr);
    }, []);
}

exports.uniteUnique = uniteUnique;