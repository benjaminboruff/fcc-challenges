/*global expect*/
import { pairElement } from '../dna';

describe('pairElement("ATCGA")', () => {
    it('should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
        expect(pairElement("ATCGA").sort()).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].sort());
    });
})

describe('pairElement("TTGAG")', () => {
    it('should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
        expect(pairElement("TTGAG").sort()).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].sort());
    });
})

describe('pairElement("CTCTA")', () => {
    it('should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
        expect(pairElement("CTCTA").sort()).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].sort());
    });
})