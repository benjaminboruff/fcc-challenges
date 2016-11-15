import { sumPrimes } from '../sp';

describe('sumPrimes(10)', () => {
    it('should return a number', () => {
        expect(typeof sumPrimes(10)).toBe('number');
    });
    
    it('should return 10', () => {
        expect(sumPrimes(10)).toBe(17);
    });
});

describe('sumPrimes(977)', () => {
    it('should return 73156', () => {
        expect(sumPrimes(977)).toBe(73156);
    });
});