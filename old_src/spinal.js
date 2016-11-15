// @flow
function spinalCase(str: string): string {
    let matchedStr = str.match(/[A-Z][a-z]*|[a-z]+/g);
    return matchedStr ? matchedStr.join("-").toLowerCase() : "";
}

export { spinalCase };