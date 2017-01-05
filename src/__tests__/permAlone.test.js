import permAlone from '../permAlone';

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

it('permAlone("abfdefa") should return 2640', () => {
  expect(permAlone("abfdefa")).toBe(2640);
});

it('permAlone("zzzzzzzz") should return 0', () => {
  expect(permAlone("zzzzzzzz")).toBe(0);
});

it('permAlone("a") should return 1', () => {
  expect(permAlone("a")).toBe(1);
});

it('permAlone("aaab") should return 0', () => {
  expect(permAlone("aaab")).toBe(0);
});

it('permAlone("aaabb") should return 12', () => {
  expect(permAlone("aaabb")).toBe(12);
});
