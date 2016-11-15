// @flow
function sumPrimes(num: number): number {
    let oddsUpToNum = [];
    // make array of odds
    for(let i = 3; i <= num; i++) {
        if( i % 2 !== 0) {oddsUpToNum.push(i);}
    }
    // reduce array of 2 + primes from odds
    return [2]
    .concat(oddsUpToNum.filter(elem => {
        for(let i = 0; i < oddsUpToNum.length; i++) {
            if(elem % oddsUpToNum[i] === 0 && elem !== oddsUpToNum[i]) {
                return false;
            }
        }
        return true;
    }))
    .reduce((prev,curr) => prev + curr);
}

export { sumPrimes };