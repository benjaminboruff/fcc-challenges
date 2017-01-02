import steamrollArray from '../steamrollArray';

describe('steamrollArray([[["a"]], [["b"]]]))', () => {
    it('should return ["a","b"]', () => {
        expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a","b"]);
    });
});
describe('steamrollArray([1, [2], [3, [[4]]]])', () => {
    it('should return [1, 2, 3, 4]', () => {
        expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    });
});
describe('steamrollArray([1, [], [3, [[4]]]]))', () => {
    it('should return [1, 3, 4]', () => {
        expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
    });
});
describe('steamrollArray([1, {}, [3, [[4]]]])', () => {
    it('should return [1, {}, 3, 4]', () => {
        expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
    });
});
