import truthCheck from '../truthCheck';

describe('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")',
 () => {
    it("should return true", () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))
        .toBe(true);
    });
});
describe('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))
        .toBe(false);
    });
});
describe('truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"))
        .toBe(false);
    });
});
describe('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"))
        .toBe(false);
    });
});
describe('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")',
 () => {
    it("should return true", () => {
        expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"))
        .toBe(true);
    });
});
describe('truthCheck([{"single": "yes"}], "single")',
 () => {
    it("should return true", () => {
        expect(truthCheck([{"single": "yes"}], "single"))
        .toBe(true);
    });
});
describe('truthCheck([{"single": ""}, {"single": "double"}], "single")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"single": ""}, {"single": "double"}], "single"))
        .toBe(false);
    });
});
describe('truthCheck([{"single": "double"}, {"single": undefined}], "single")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"single": "double"}, {"single": undefined}], "single"))
        .toBe(false);
    });
});
describe('truthCheck([{"single": "double"}, {"single": NaN}], "single")',
 () => {
    it("should return false", () => {
        expect(truthCheck([{"single": "double"}, {"single": NaN}], "single"))
        .toBe(false);
    });
});
