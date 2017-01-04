/* jshint esversion: 6 */
function sym(args) {
    let argArray = [...arguments];

    let symDiff = argArray.reduce((prev, curr) => {
      prev = Array.from(new Set(prev));
      curr = Array.from(new Set(curr));
      let removedItems = [];
        prev.forEach((elem, index) => {
          let testIndex = curr.findIndex(e => e === elem);
          if( testIndex !== -1) {
            curr.splice(testIndex,1);
            removedItems.push(elem);
          }
        });
        removedItems.forEach((elem, index) => {
          let testIndex = prev.findIndex(e => e === elem);
          if( testIndex !== -1) {
            prev.splice(testIndex,1);
          }
        });
        return prev.concat(curr);
    });
    symDiff.sort((a,b) => a - b);
    return symDiff;
}

export default sym;
