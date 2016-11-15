'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function convertHTML(str) {
    var lookup = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "\'": '&apos;'
    };

    return str.replace(/\&|<|>|"|\'/g, function (match) {
        return lookup[match];
    });
}

exports.convertHTML = convertHTML;