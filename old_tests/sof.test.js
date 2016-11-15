import { sumFibs } from '../sof';

describe('sumFibs(1)', () => {
    it('should return a number', () => {
        expect(typeof sumFibs(1)).toBe('number');
    });
});

describe('sumFibs(1000)', () => {
    it('should return 1785', () => {
        expect(sumFibs(1000)).toBe(1785);
    });
});

describe('sumFibs(4000000)', () => {
    it('should return 4613732', () => {
        expect(sumFibs(4000000)).toBe(4613732);
    });
});

describe('sumFibs(4)', () => {
    it('should return 5', () => {
        expect(sumFibs(4)).toBe(5);
    });
});

describe('sumFibs(75024)', () => {
    it('should return 60696', () => {
        expect(sumFibs(75024)).toBe(60696);
    });
});

describe('sumFibs(75025)', () => {
    it('should return 135721', () => {
        expect(sumFibs(75025)).toBe(135721);
    });
});