/* jshint esversion: 6 */
function smallestCommons(arr) {
  let min, max;
  let allNums = [];

  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }

  for(let i = min; i <= max; i++) {
    allNums.push(i);
  }

  console.log(allNums);



  let smallestC = lcm(allNums[1], allNums[2]);
  return smallestC;
}

function lcm(a,b) {
  let gcd = ((x, y) => {
    while(y !== 0) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  })(a, b);

  return (a * b) / gcd;
}

export default smallestCommons;
