import smallestCommons from '../scm';

describe('smallestCommons([1, 5])', () => {
    it('should return a number', () => {
        expect(typeof smallestCommons([1, 5])).toBe('number');
    });

    it('should return 60', () => {
        expect(smallestCommons([1, 5])).toBe(60);
    });
});

describe('smallestCommons([5, 1])', () => {
    it('should return 60', () => {
        expect(smallestCommons([5, 1])).toBe(60);
    });
});

describe('smallestCommons([1, 13])', () => {
    it('should return 360360', () => {
        expect(smallestCommons([1, 13])).toBe(360360);
    });
});

describe('smallestCommons([23, 18])', () => {
    it('should return 6056820', () => {
        expect(smallestCommons([23, 18])).toBe(6056820);
    });
});
