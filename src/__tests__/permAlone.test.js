import {
    permAlone,
    swapTwo,
    swapSet
} from '../permAlone';

describe('***** swapTwo *****', () => {
    it('swapTwo("aab", 0, 0) should return a string', () => {
        expect(typeof swapTwo("aab", 0, 0)).toBe('string');
    });

    it('swapTwo("aab", 0, 0) should return "aab"', () => {
        expect(swapTwo("aab", 0, 0)).toBe('aab');
    });

    it('swapTwo("aab", 0, 1) should return "aab"', () => {
        expect(swapTwo("aab", 0, 1)).toBe('aab');
    });

    it('swapTwo("aab", 1, 2) should return "aba"', () => {
        expect(swapTwo("aab", 1, 2)).toBe('aba');
    });

    it('swapTwo("aabb", 0, 0) should return "aabb"', () => {
        expect(swapTwo("aabb", 0, 0)).toBe('aabb');
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
});

describe('***** swapSet *****', () => {
  it('swapSet(aab) ahould return an array', () => {
    expect(Array.isArray(swapSet("aab"))).toBe(true);
  });

  it('swapSet(aab) ahould return ["aab", "aab", "aba"]', () => {
    expect(swapSet("aab")).toEqual(["aab", "aab", "aba"]);
  });

  it('swapSet(aabb) ahould return ["aabb", "aabb", "abab", "abba"]', () => {
    expect(swapSet("aabb")).toEqual(["aabb", "aabb", "abab", "abba"]);
  });

  it('swapSet(abba) ahould return ["abba", "baba", "bbaa", "bbaa"]', () => {
    expect(swapSet("abba")).toEqual(["abba", "baba", "bbaa", "bbaa"]);
  });

  it('swapSet(abab) ahould return ["abab", "baab", "baab", "baba"]', () => {
    expect(swapSet("abab")).toEqual(["abab", "baab", "baab", "baba"]);
  });
});

describe('***** permaAlone *****', () => {
    xit('permAlone("aab") should return a number', () => {
        expect(typeof permAlone("aab")).toBe('number');
    });

    xit('permAlone("aab") should return 2', () => {
        expect(permAlone("aab")).toBe(2);
    });

    xit('permAlone("aaa") should return 0', () => {
        expect(permAlone("aaa")).toBe(0);
    });

    xit('permAlone("aabb") should return 8', () => {
        expect(permAlone("aabb")).toBe(8);
    });

    xit('permAlone("abcdefa") should return 3600', () => {
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
