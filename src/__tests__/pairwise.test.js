import pairwise from '../pairwise';

it('pairwise([1, 4, 2, 3, 0, 5], 7)', () => {
  expect(pairwise([1, 4, 2, 3, 0, 5], 7))
  .toBe(11);
});
it('pairwise([1, 3, 2, 4], 4)', () => {
  expect(pairwise([1, 3, 2, 4], 4))
  .toBe(1);
});
it('pairwise([1, 1, 1], 2)', () => {
  expect(pairwise([1, 1, 1], 2))
  .toBe(1);
});
it('pairwise([0, 0, 0, 0, 1, 1], 1)', () => {
  expect(pairwise([0, 0, 0, 0, 1, 1], 1))
  .toBe(10);
});
it('pairwise([], 100)', () => {
  expect(pairwise([], 100))
  .toBe(0);
});
it('pairwise([7, 9, 11, 13, 15], 20)', () => {
  expect(pairwise([7, 9, 11, 13, 15], 20))
  .toBe(6);
});
