import findElement from '../findElement';

describe('findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)', () => {
    it('should return 8', () => {
        expect(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0 )).toBe(8);
    });

    it('should return undefined', () => {
        expect(findElement([1, 3, 5, 9], num => num % 2 === 0 )).toBeUndefined();
    });
});
