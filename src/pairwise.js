/* jshint esversion: 6 */
function pairwise(arr, arg) {
  let targetList = [];
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] + arr[j] === arg) {
          targetList.push([arr[i], arr[j]]);
        }
      }
    }
    console.log(targetList);
    return arg;
}

export default pairwise;
