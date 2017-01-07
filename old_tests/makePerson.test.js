import {
    Person
} from '../makePerson';

it('makeFriendlyDates(["2016-07-01", "2016-07-04"])', () => {
  expect(makeFriendlyDates(["2016-07-01", "2016-07-04"]))
  .toEqual(["July 1st","4th"]);
});
