/* jshint esversion: 6 */
function updateInventory(arr1, arr2) {
    // remove empty items
    let cleanInv = arr1.filter(item => item.length !== 0);
    let cleanUpdate = arr2.filter(item => item.length !== 0);
    let newItems = [];

    cleanUpdate.forEach(itemUpd => {
        let foundIndex = cleanInv.findIndex((itemInv) => {
            return itemInv[1] === itemUpd[1];
        });

        if (foundIndex === -1) {
          //push item not found in existing inventory
          // onto newItems array
            newItems.push(itemUpd);
        } else {
          // item was found, so update quantity
            cleanInv[foundIndex][0] += itemUpd[0];
        }

    });
    // add new items to existing inventory
    let results = cleanInv.concat(newItems);

    // sort by item name: String
    results.sort((a,b) => {
      let nameA = a[1].toUpperCase();
      let nameB = b[1].toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      // if they are equal
      return 0;
    });
    return results;
}

export default updateInventory;
