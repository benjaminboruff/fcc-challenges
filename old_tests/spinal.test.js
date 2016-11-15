import { spinalCase } from '../spinal';

describe('spinalCase("This Is Spinal Tap")', () => {
    it('should return "this-is-spinal-tap"', () => {
       expect(spinalCase("This Is Spinal Tap")).toBe("this-is-spinal-tap");
    });
});

describe('spinalCase("thisIsSpinalTap")', () => {
    it('should return "this-is-spinal-tap"', () => {
       expect(spinalCase("thisIsSpinalTap")).toBe("this-is-spinal-tap");
    });
});

describe('spinalCase("The_Andy_Griffith_Show")', () => {
    it('should return "the-andy-griffith-show"', () => {
       expect(spinalCase("The_Andy_Griffith_Show")).toBe("the-andy-griffith-show");
    });
});

describe('spinalCase("Teletubbies say Eh-oh")', () => {
    it('should return "teletubbies-say-eh-oh"', () => {
       expect(spinalCase("Teletubbies say Eh-oh")).toBe("teletubbies-say-eh-oh");
    });
});

describe('spinalCase("AllThe-small Things")', () => {
    it('should return "all-the-small-things"', () => {
       expect(spinalCase("AllThe-small Things")).toBe("all-the-small-things");
    });
});