import addTogether from '../addTogether';

describe('addTogether(2, 3)',
 () => {
    it("should return 5", () => {
        expect(addTogether(2, 3))
        .toBe(5);
    });
});
describe('addTogether(2)(3)',
 () => {
    it("should return 5", () => {
        expect(addTogether(2)(3))
        .toBe(5);
    });
});
describe('addTogether("http://bit.ly/IqT6zt")',
 () => {
    it("should return undefined", () => {
        expect(addTogether("http://bit.ly/IqT6zt"))
        .toBeUndefined();
    });
});
describe('addTogether(2, "3")',
 () => {
    it("should return undefined", () => {
        expect(addTogether(2, "3"))
        .toBeUndefined();
    });
});
describe('addTogether(2,)([3])',
 () => {
    it("should return undefined", () => {
        expect(addTogether(2)([3]))
        .toBeUndefined();
    });
});
