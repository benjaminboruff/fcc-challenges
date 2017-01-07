/* jshint esversion: 6 */
function makeFriendlyDates(arr) {
    // date lookup data
    let data = {
        "month": {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December",
            "": ""
        },
        "day": {
            "01": "1st",
            "02": "2nd",
            "03": "3rd",
            "04": "4th",
            "05": "5th",
            "06": "6th",
            "07": "7th",
            "08": "8th",
            "09": "9th",
            "10": "10th",
            "11": "11th",
            "12": "12th",
            "13": "13th",
            "14": "14th",
            "15": "15th",
            "16": "16th",
            "17": "17th",
            "18": "18th",
            "19": "19th",
            "20": "20th",
            "21": "21th",
            "22": "22nd",
            "23": "23rd",
            "24": "24th",
            "25": "25th",
            "26": "26th",
            "27": "27th",
            "28": "28th",
            "29": "29th",
            "30": "30th",
            "31": "31st",
            "": ""
        }
    };
    // given a string in YYYY-MM-DD format with
    // options for which fields (m,d,y) should be returned,
    // make and return a formatted string
    function convertDate(date, m, d, y) {
        let dateArr = date.split("-");
        let yr = y === true ? dateArr[0] : "";
        let mth = m === true ? data.month[dateArr[1]] : "";
        let dy = d === true ? data.day[dateArr[2]] : "";
        let outputDateStr = "";

        if (m && d && !y) {
            return mth + " " + dy;
        }

        if (m && d && y) {
            return mth + " " + dy + ", " + yr;
        }

        if (!m && d && !y) {
            return dy;
        }

        return "NOT A VALID DATE";
    }

    function testDates(date1, date2) {
        let date1Arr = date1.split("-");
        let date2Arr = date2.split("-");
        let currentDate = new Date();
        let currentYear = currentDate.getUTCFullYear();
        // default to false
        let include1 = {
            "m": false,
            "d": false,
            "y": false
        };
        let include2 = {
            "m": false,
            "d": false,
            "y": false
        };
        // if day, month, and year are same
        if (date1Arr[0] === date2Arr[0] &&
            date1Arr[1] === date2Arr[1] &&
            date1Arr[2] === date2Arr[2]) {
            include1.d = true;
            include1.m = true;
            include1.y = true;

            return [include1];
        }
        // If the range ends in the same month that it begins,
        // do not display the ending year or month.
        if (date1Arr[0] === date2Arr[0] && date1Arr[1] === date2Arr[1]) {
            include1.d = true;
            include2.d = true;

            include1.m = true;

            return [include1, include2];
        }
        // Additionally, if the date range begins in the current year
        // (i.e. it is currently the year 2016) and ends within one year,
        // the year should not be displayed at the beginning of the friendly range
        if (date1Arr[0] === currentYear &&
            (date2Arr[0] === date1Arr[0] || date2Arr[0] - date1Arr[0] === 1 &&
                Math.abs((12 - date2Arr[1]) - (12 - date1Arr[1])) < 12)) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            include2.y = true;

            return [include1, include2];
        }
        // If the date range ends in more than a year from when it begins,
        // and ends in the same month, on the same day, include full data
        if (date2Arr[0] - date1Arr[0] >= 1  && date2Arr[1] === date1Arr[1] &&
            date2Arr[2] === date1Arr[2]) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            include1.y = true;
            include2.y = true;

            return [include1, include2];
        }
        // If the date range ends in more than a year from when it begins,
        // and ends in the same month, don't display ending year
        if (date2Arr[0] - date1Arr[0] >= 1 &&
            date2Arr[1] === date1Arr[1]) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            include1.y = true;

            return [include1, include2];
        }
        // If the date range ends in less than a year from when it begins,
        // do not display the ending year for both
        if (date2Arr[0] - date1Arr[0] === 1 &&
            Math.abs((12 - date2Arr[1]) - (12 - date1Arr[1])) < 12) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            return [include1, include2];
        }
        // the years are more than a year apart
        if (date2Arr[0] - date1Arr[0] >= 1 &&
            Math.abs((12 - date2Arr[1]) - (12 - date1Arr[1])) <= 12) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            include1.y = true;
            include2.y = true;
            return [include1, include2];
        }
        // less than a year apart in same year
        if ((date2Arr[0] === date1Arr[0]) || (date2Arr[0] - date1Arr[0] >= 1 ) &&
            Math.abs((12 - date2Arr[1]) - (12 - date1Arr[1])) <= 12) {
            include1.d = true;
            include2.d = true;

            include1.m = true;
            include2.m = true;

            include1.y = true;
            return [include1, include2];
        }
        return [include1, include2];

    }

    let include = testDates(arr[0], arr[1]);
    // if both dates were the same
    if (include.length === 1) return [convertDate(arr[0], include[0].m, include[0].d, include[0].y)];

    let friendlyArr = [convertDate(arr[0], include[0].m, include[0].d, include[0].y),
        convertDate(arr[1], include[1].m, include[1].d, include[1].y)
    ];

    return friendlyArr;
}

export {
    makeFriendlyDates
};
