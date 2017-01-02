import dropElements from '../dropElements';

describe('dropElements([1,2,3,4], n => n >= 3 )', () => {
    it('should return [3,4]', () => {
        expect(dropElements([1,2,3,4], n => n >= 3 )).toEqual([3,4]);
    });
});
describe('dropElements([0,1,0,1], n => n === 1 )', () => {
    it('should return [1,0,1]', () => {
        expect(dropElements([1,0,1], n => n === 1 )).toEqual([1,0,1]);
    });
});
describe('dropElements([1,2,3], n => n > 0 )', () => {
    it('should return [1,2,3]', () => {
        expect(dropElements([1,2,3], n => n > 0 )).toEqual([1,2,3]);
    });
});
describe('dropElements([1,2,3,4], n => n > 5 )', () => {
    it('should return []', () => {
        expect(dropElements([1,2,3,4], n => n > 5 )).toEqual([]);
    });
});
describe('dropElements([1,2,3,7,4], n => n > 3 )', () => {
    it('should return [7,4]', () => {
        expect(dropElements([1,2,3,7,4], n => n > 3 )).toEqual([7,4]);
    });
});
describe('dropElements([1,2,3,9,2], n => n > 2 )', () => {
    it('should return [3,9,2]', () => {
        expect(dropElements([1,2,3,9,2], n => n > 2 )).toEqual([3,9,2]);
    });
});
