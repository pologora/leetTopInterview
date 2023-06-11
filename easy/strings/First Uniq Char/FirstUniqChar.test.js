const FirstUniqChar = require('./FirstUniqChar');

describe('first unique char in string', () => {
  test('returns string', () => {
    expect(typeof FirstUniqChar()).toBe('string');
  });

  test('return first uniq char', () => {
    const input = 'meersaar';
    expect(FirstUniqChar(input)).toBe('s');
  });
});
