import telephoneCheck from '../telephoneCheck';

describe('telephoneCheck("555-555-5555")',
 () => {
    it('should return a boolean', () => {
        expect(telephoneCheck('555-555-5555').toString())
        .toMatch(/true|false/);
    });
});
describe('telephoneCheck("1 555-555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("1 555-555-5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("1 (555) 555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("1 (555) 555-5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("5555555555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("5555555555"))
        .toBe(true);
    });
});
describe('telephoneCheck("555-555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("555-555-5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("(555)555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("(555)555-5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("1(555)555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("1(555)555-5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("555-5555")',
 () => {
    it('should return false', () => {
        expect(telephoneCheck("555-5555"))
        .toBe(false);
    });
});
describe('telephoneCheck("5555555")',
 () => {
    it('should return false', () => {
        expect(telephoneCheck("5555555"))
        .toBe(false);
    });
});
describe('telephoneCheck("1 555)555-5555")',
 () => {
    it('should return false', () => {
        expect(telephoneCheck("1 555)555-5555"))
        .toBe(false);
    });
});
describe('telephoneCheck("1 555 555 5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("1 555 555 5555"))
        .toBe(true);
    });
});
describe('telephoneCheck("1 456 789 4444")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("1 456 789 4444"))
        .toBe(true);
    });
});
describe('telephoneCheck("123**&!!asdf#")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("123**&!!asdf#"))
        .toBe(false);
    });
});
describe('telephoneCheck("55555555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("55555555"))
        .toBe(false);
    });
});
describe('telephoneCheck("(6505552368)")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("(6505552368)"))
        .toBe(false);
    });
});
describe('telephoneCheck("2 (757) 622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("2 (757) 622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("0 (757) 622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("0 (757) 622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("-1 (757) 622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("-1 (757) 622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("2 757 622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("2 757 622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("10 (757) 622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("10 (757) 622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("27576227382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("27576227382"))
        .toBe(false);
    });
});
describe('telephoneCheck("(275)76227382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("(275)76227382"))
        .toBe(false);
    });
});
describe('telephoneCheck("2(757)6227382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("2(757)6227382"))
        .toBe(false);
    });
});
describe('telephoneCheck("2(757)622-7382")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("2(757)622-7382"))
        .toBe(false);
    });
});
describe('telephoneCheck("555)-555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("555)-555-5555"))
        .toBe(false);
    });
});
describe('telephoneCheck("(555-555-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("(555-555-5555"))
        .toBe(false);
    });
});
describe('telephoneCheck("(555)5(55?)-5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("(555)5(55?)-5555"))
        .toBe(false);
    });
});
describe('telephoneCheck("555 555 5555")',
 () => {
    it('should return true', () => {
        expect(telephoneCheck("555 555 5555"))
        .toBe(true);
    });
});
