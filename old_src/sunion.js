// @flow
function uniteUnique(arr: []): [] {
    let args = Array.from(arguments);
    return args.reduce((prev, curr) => {
        for(let i = 0; i < prev.length; i++){
            let elemIndex = curr.findIndex((elem) => {
                return elem === prev[i];
            });
            if(elemIndex !== -1) {
                curr.splice(elemIndex,1);
            }
        }
        return prev.concat(curr);
    },[]);
}

export { uniteUnique };