// @flow
function sumFibs(num: number): number {
    let fibs = [1,1]
    let oddFibs = [];
    // make fib numbers
    for(let i = 2; i < num; i++) {
        fibs.push(fibs[i -1] + fibs[i -2]);
    }
    // make array of odd fibs <= num
    for(let i = 0; fibs[i] <= num; i++ ){
        fibs[i] % 2 !== 0 ? oddFibs.push(fibs[i]) : "skip it!";
    }
    // sum odd array of fibs <= num
    return oddFibs.reduce((prev,curr) => prev + curr);
}

export { sumFibs };