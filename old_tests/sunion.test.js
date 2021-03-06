import { uniteUnique } from '../sunion';

describe('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])', () => {
    it('should return [1, 3, 2, 5, 4]', () => {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
    });
});

describe('uniteUnique([1, 3, 2], [1, [5]], [2, [4]])', () => {
    it('should return [1, 3, 2, [5], [4]]', () => {
        expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);
    });
});

describe('uniteUnique([1, 2, 3], [5, 2, 1])', () => {
    it('should return [1, 2, 3, 5]', () => {
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
    });
});

describe('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])', () => {
    it('should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});
