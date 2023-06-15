const implementStr = require('./implementStr');

describe('neddle and haystack strings', () => {
  test('should return number', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    expect(typeof implementStr(haystack, needle)).toBe('number');
  });
});
