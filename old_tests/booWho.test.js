import {booWho} from '../booWho';

describe("booWho(true)", () => {
    it('should return true', () => {
        expect(booWho(true)).toBe(true);
    });
});

describe("booWho(false)", () => {
    it('should return true', () => {
        expect(booWho(false)).toBe(true);
    });
});

describe("booWho([1,2,3])", () => {
    it('should return false', () => {
        expect(booWho([1,2,3])).toBe(false);
    });
});

describe("booWho([].slice)", () => {
    it('should return false', () => {
        expect(booWho([].slice)).toBe(false);
    });
});

describe('booWho({ "a": 1 })', () => {
    it('should return false', () => {
        expect(booWho({ "a": 1 })).toBe(false);
    });
});

describe("booWho(1)", () => {
    it('should return false', () => {
        expect(booWho(1)).toBe(false);
    });
});

describe("booWho(NaN)", () => {
    it('should return false', () => {
        expect(booWho(NaN)).toBe(false);
    });
});

describe("booWho('a')", () => {
    it('should return false', () => {
        expect(booWho('a')).toBe(false);
    });
});

describe("booWho('true')", () => {
    it('should return false', () => {
        expect(booWho('true')).toBe(false);
    });
});

describe("booWho('false')", () => {
    it('should return false', () => {
        expect(booWho('false')).toBe(false);
    });
});