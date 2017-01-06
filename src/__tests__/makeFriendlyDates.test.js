import {
    makeFriendlyDates
} from '../makeFriendlyDates';

describe('***** makeFriendlyDates *****', () => {
    it('makeFriendlyDates("aab") should return a number', () => {
        expect(typeof makeFriendlyDates("aab")).toBe('number');
    });

    it('makeFriendlyDates("aab") should return 2', () => {
        expect(makeFriendlyDates("aab")).toBe(2);
    });

    it('makeFriendlyDates("aaa") should return 0', () => {
        expect(makeFriendlyDates("aaa")).toBe(0);
    });

    it('makeFriendlyDates("aabb") should return 8', () => {
        expect(makeFriendlyDates("aabb")).toBe(8);
    });

    it('makeFriendlyDates("abcdefa") should return 3600', () => {
        expect(makeFriendlyDates("abcdefa")).toBe(3600);
    });

    it('makeFriendlyDates("abfdefa") should return 2640', () => {
        expect(makeFriendlyDates("abfdefa")).toBe(2640);
    });

    it('makeFriendlyDates("zzzzzzzz") should return 0', () => {
        expect(makeFriendlyDates("zzzzzzzz")).toBe(0);
    });

    it('makeFriendlyDates("a") should return 1', () => {
        expect(makeFriendlyDates("a")).toBe(1);
    });

    it('makeFriendlyDates("aaab") should return 0', () => {
        expect(makeFriendlyDates("aaab")).toBe(0);
    });

    it('makeFriendlyDates("aaabb") should return 12', () => {
        expect(makeFriendlyDates("aaabb")).toBe(12);
    });
});
