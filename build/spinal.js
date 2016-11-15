"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function spinalCase(str) {
    var matchedStr = str.match(/[A-Z][a-z]*|[a-z]+/g);
    return matchedStr ? matchedStr.join("-").toLowerCase() : "";
}

exports.spinalCase = spinalCase;