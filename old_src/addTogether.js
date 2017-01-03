/* jshint esversion: 6 */
function addTogether() {
    let args = [...arguments];
    let x = args[0];
    console.log('Arg1:' + args[0] + 'Arg2:' + args[1]);
    if (args.length === 2 || typeof args[0] !== 'number') {
        return typeof args[0] !== 'number' || typeof args[1] !== 'number' ? undefined : args[0] + args[1];
    } else {
        return function() {
          let args = [...arguments];
          let y = args[0];
          return typeof y !== 'number' ? undefined : x + y;
        };
    }
}

export default addTogether;
