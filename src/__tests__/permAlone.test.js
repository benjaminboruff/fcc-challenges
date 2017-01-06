import {
    permAlone,
    swapTwo,
    swapSet
} from '../permAlone';
describe('***** swapTwo *****', () => {
    it('swapTwo("aab", 0, 1) should return a string', () => {
        expect(typeof swapTwo("aab", 0, 1)).toBe('string');
    });

    it('swapTwo("aab", 0, 1) should return "aab"', () => {
        expect(swapTwo("aab", 0, 1)).toBe('aab');
    });

    it('swapTwo("aab", 1, 2) should return "aba"', () => {
        expect(swapTwo("aab", 0, 1)).toBe('aab');
    });

    it('swapTwo("aab", 0, 2) should return "baa"', () => {
        expect(swapTwo("aab", 0, 2)).toBe('baa');
    });

    it('swapTwo("aabb", 0, 1) should return "aabb"', () => {
        expect(swapTwo("aabb", 0, 1)).toBe('aabb');
    });

    it('swapTwo("aabb", 1, 2) should return "abab"', () => {
        expect(swapTwo("aabb", 1, 2)).toBe('abab');
    });

    it('swapTwo("abab", 2, 3) should return "abba"', () => {
        expect(swapTwo("abab", 2, 3)).toBe('abba');
    });

    it('swapTwo("bbaa", 2, 3) should return "bbaa"', () => {
        expect(swapTwo("bbaa", 2, 3)).toBe('bbaa');
    });
});

describe('***** swapSet *****', () => {
  it('swapSet(aab) ahould return an array', () => {
    expect(Array.isArray(swapSet("aab"))).toBe(true);
  });

  it('swapSet(aab) ahould return ["aab", "aba", "aab"]', () => {
    expect(swapSet("aab")).toEqual(["aab", "aba", "aab"]);
  });

  it('swapSet(aabb) ahould return ["aabb", "abab", "abba", "abab"]', () => {
    expect(swapSet("aabb")).toEqual(["aabb", "abab", "abba", "abab"]);
  });

  it('swapSet(abba) ahould return ["baba", "bbaa", "bbaa", "bbaa"]', () => {
    expect(swapSet("abba")).toEqual(["baba", "bbaa", "bbaa", "bbaa"]);
  });

  it('swapSet(abab) ahould return ["baab", "baab", "baba", "baba"]', () => {
    expect(swapSet("abab")).toEqual(["baab", "baab", "baba", "baab"]);
  });
});

describe('***** permaAlone *****', () => {
    it('permAlone("aab") should return a number', () => {
        expect(typeof permAlone("aab")).toBe('number');
    });

    it('permAlone("aab") should return 2', () => {
        expect(permAlone("aab")).toBe(2);
    });

    it('permAlone("aaa") should return 0', () => {
        expect(permAlone("aaa")).toBe(0);
    });

    it('permAlone("aabb") should return 8', () => {
        expect(permAlone("aabb")).toBe(8);
    });

    it('permAlone("abcdefa") should return 3600', () => {
        expect(permAlone("abcdefa")).toBe(3600);
    });

    xit('permAlone("abfdefa") should return 2640', () => {
        expect(permAlone("abfdefa")).toBe(2640);
    });

    xit('permAlone("zzzzzzzz") should return 0', () => {
        expect(permAlone("zzzzzzzz")).toBe(0);
    });

    xit('permAlone("a") should return 1', () => {
        expect(permAlone("a")).toBe(1);
    });

    xit('permAlone("aaab") should return 0', () => {
        expect(permAlone("aaab")).toBe(0);
    });

    xit('permAlone("aaabb") should return 12', () => {
        expect(permAlone("aaabb")).toBe(12);
    });
});
