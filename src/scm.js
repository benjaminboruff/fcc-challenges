/* jshint esversion: 6 */
function smallestCommons(arr) {
  let min, max;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  let gcd = ((a, b) => {
    while(b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  })(min, max);

  let lcm = (min / gcd) * max;
  return lcm;
}

export default smallestCommons;
