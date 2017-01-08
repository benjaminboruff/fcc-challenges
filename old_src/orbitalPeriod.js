/* jshint esversion: 6 */
function orbitalPeriod(arr) {

    return arr.map(item => ({ name: item.name, orbitalPeriod: smallBodyOrbitalPeriod(item.avgAlt)}));

}

function smallBodyOrbitalPeriod(altitude) {
    let earthRadius = 6367.4447;
    let GM = 398600.4418;

    return Math.round((2 * Math.PI * Math.sqrt(Math.pow(earthRadius + altitude, 3) / GM) * 100) / 100);

}

export default orbitalPeriod;
