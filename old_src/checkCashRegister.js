/* jshint esversion: 6 */
function checkCashRegister(price, cash, cid) {
    let totalCashOnHand = sumCash(cid);
    let changeDue = cash - price;

    // if the total cash on hand is less than or equal to
    // the change due, we need not check the register
    if (totalCashOnHand < changeDue) {
        return "Insufficient Funds";
    } else if (totalCashOnHand === changeDue) {
        return "Closed";
    }
    // make change if possible
    return makeChange(changeDue, cid);
}

function sumCash(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i][1];
    }
    return total;
}

function makeChange(changeDue, cid) {

    let money = [
        ["ONE HUNDRED", 100.00],
        ["TWENTY", 20.00],
        ["TEN", 10.00],
        ["FIVE", 5.00],
        ["ONE", 1.00],
        ["QUARTER", 0.25],
        ["DIME", 0.10],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    //make a register object with total
    // because it is much easier to make changes
    // on an object via properties than an array's
    // index
    let register = cid.reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {});

    // go though each money denomination
    let changeArray = money.reduce((acc, curr) => {
        let value = 0;
        // remove this denomination from register if any
        while (register[curr[0]] > 0 && changeDue >= curr[1]) {
            // deduct from change due
            changeDue -= curr[1];
            register[curr[0]] -= curr[1];
            // add to total used of this currency
            value += curr[1];

            changeDue = Math.round(changeDue * 100) / 100;
        }
        // add currency used to change array to return
        if (value > 0) {
            acc.push([curr[0], value]);
        }

        return acc;
    }, []);

    // if changeDue is greater than 0, we have the total cash to make change
    // but not enough of specific denominations to make change
    return changeDue !== 0 ? "Insufficient Funds" : changeArray;
}

export default checkCashRegister;
