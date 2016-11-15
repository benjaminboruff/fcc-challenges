/*global expect*/
import {fearNotLetter} from '../missing';

describe('fearNotLetter("abce")', () => {
    it('should return "d"', () => {
        expect(fearNotLetter("abce")).toBe("d");
    });
});

describe('fearNotLetter("abcdefghjklmno")', () => {
    it('should return "i"', () => {
        expect(fearNotLetter("abcdefghjklmno")).toBe("i");
    });
});

describe('fearNotLetter("bcd")', () => {
    it('should return undefined', () => {
        expect(fearNotLetter("bcd")).toBe(undefined);
    });
});

describe('fearNotLetter("yz")', () => {
    it('should return undefined', () => {
        expect(fearNotLetter("yz")).toBe(undefined);
    });
});