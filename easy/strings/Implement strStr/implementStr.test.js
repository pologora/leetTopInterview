const implementStr = require('./implementStr');

describe('neddle and haystack strings', () => {
  test('should return number', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    expect(typeof implementStr(haystack, needle)).toBe('number');
  });

  test('should return index of the first occurrence if needle is a part of haystack', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    expect(implementStr(haystack, needle)).toBe(0);
  });

  test('should return index of the first occurrence if needle is a part of haystack', () => {
    const haystack = 'gogoram';
    const needle = 'ram';
    expect(implementStr(haystack, needle)).toBe(4);
  });

  test('should return -1 if needle is not a part of a haystack', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';
    expect(implementStr(haystack, needle)).toBe(-1);
  });

  test('should return index of the first occurrence if needle is a part of haystack', () => {
    const haystack = 'mississippi';
    const needle = 'issip';
    expect(implementStr(haystack, needle)).toBe(4);
  });
});
