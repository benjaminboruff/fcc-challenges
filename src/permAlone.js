/* jshint esversion: 6 */
function permAlone(str) {
  let numSwaps = factorial(str.length) / 2;
  let list = [];
  let noRepeats = 0;

  console.log(numSwaps);
  for(let i = 0, j = -1; i < numSwaps; i++, j++) {
    if(j < 0) {
      //let tmp = swap(str,0,i);
      console.log("ONE TIME ONLY");
      //list.push(tmp);
      //str = tmp;
    } else {
      console.log(str + '(' + j + ',' + i + ')');
      let tmp = swap(str,j,i);
      console.log(tmp);
      list.push(tmp);
      str = tmp;
    }
  }
  console.log('***************************');
  console.log("THIS: " + swap('aabb', 0,1));
  console.log("THIS: " + swap('aabb', 1,2));
  console.log("THIS: " + swap('abab', 2,3));
  console.log("THIS: " + swap('abba', 3,0));

  let filter = /(.)\1/g;
  for(let i = 0; i < list.length; i++) {
    noRepeats += list[i].match(filter) === null ? 1 : 0;
  }
  console.log(list);
  console.log(noRepeats * 2);
  return noRepeats * 2;
}

function swap(str, index1, index2) {
  let arr = str.split("");
  console.log("PRE-SWAP ARRAY: " + arr);
  let x = arr[index1];
  //console.log(x);
  let y = arr[index2];
  //console.log(y);
  arr[index1] = y;
  arr[index2] = x;
  console.log("POST-SWAP ARRAY: " + arr);
  return arr.join("");
}

function factorial(num) {
  // only positive numbers
  if(num < 0) {
    return -1;
  }

  if(num  === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

export default permAlone;
