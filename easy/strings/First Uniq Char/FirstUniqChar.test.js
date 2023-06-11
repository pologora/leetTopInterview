const FirstUniqChar = require('./FirstUniqChar');

describe('first unique char in string', () => {
  test('returns number', () => {
    expect(typeof FirstUniqChar()).toBe('number');
  });

  test('return index of the first uniq char', () => {
    const input = 'meersaamr';
    expect(FirstUniqChar(input)).toBe(4);
  });

  test('return -1 if no uniq chars', () => {
    const input = 'aabbccdd';
    expect(FirstUniqChar(input)).toBe(-1);
  });
});
