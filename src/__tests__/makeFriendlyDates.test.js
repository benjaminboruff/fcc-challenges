import {
    makeFriendlyDates
} from '../makeFriendlyDates';

it('makeFriendlyDates(["2016-07-01", "2016-07-04"])', () => {
  expect(makeFriendlyDates(["2016-07-01", "2016-07-04"]))
  .toEqual(["July 1st","4th"]);
});

it('makeFriendlyDates(["2016-12-01", "2017-02-03"])', () => {
  expect(makeFriendlyDates(["2016-12-01", "2017-02-03"]))
  .toEqual(["December 1st","February 3rd"]);
});

it('makeFriendlyDates(["2016-12-01", "2018-02-03"])', () => {
  expect(makeFriendlyDates(["2016-12-01", "2018-02-03"]))
  .toEqual(["December 1st, 2016","February 3rd, 2018"]);
});

it('makeFriendlyDates(["2017-03-01", "2017-05-05"])', () => {
  expect(makeFriendlyDates(["2017-03-01", "2017-05-05"]))
  .toEqual(["March 1st, 2017","May 5th"]);
});

it('makeFriendlyDates(["2018-01-13", "2018-01-13"])', () => {
  expect(makeFriendlyDates(["2018-01-13", "2018-01-13"]))
  .toEqual(["January 13th, 2018"]);
});

it('makeFriendlyDates(["2022-09-05", "2023-09-04"])', () => {
  expect(makeFriendlyDates(["2022-09-05", "2023-09-04"]))
  .toEqual(["September 5th, 2022","September 4th"]);
});

it('makeFriendlyDates(["2022-09-05", "2023-09-05"])', () => {
  expect(makeFriendlyDates(["2022-09-05", "2023-09-05"]))
  .toEqual(["September 5th, 2022","September 5th, 2023"]);
});
