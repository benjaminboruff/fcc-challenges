import { convertHTML } from '../convert';

describe('convertHTML("Dolce & Gabbana")', () => {
    it('should return "Dolce &amp; Gabbana"', () => {
        expect(convertHTML("Dolce & Gabbana")).toBe('Dolce &amp; Gabbana');
    });
});

describe('convertHTML("Hamburgers < Pizza < Tacos")', () => {
    it('should return "Hamburgers &lt; Pizza &lt; Tacos"', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe('Hamburgers &lt; Pizza &lt; Tacos');
    });
});

describe('convertHTML("Sixty > twelve")', () => {
    it('should return "Sixty &gt; twelve"', () => {
        expect(convertHTML("Sixty > twelve")).toBe('Sixty &gt; twelve');
    });
});

describe("convertHTML('Stuff in \"quotation marks\"')", () => {
    it('should return Stuff in &quot;quotation marks&quot;', () => {
        expect(convertHTML('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
    });
});

describe('convertHTML("Shindler\'s List")', () => {
    it('should return "Shindler&apos;s List"', () => {
        expect(convertHTML("Shindler's List")).toBe('Shindler&apos;s List');
    });
});

describe('convertHTML("<>")', () => {
    it('should return "&lt;&gt;"', () => {
        expect(convertHTML("<>")).toBe('&lt;&gt;');
    });
});

describe('convertHTML("abc")', () => {
    it('should return "abc"', () => {
        expect(convertHTML("abc")).toBe('abc');
    });
});