const reverseString = require('./reverseString');

describe('reverse string', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];

  test('return void', () => {
    expect(reverseString(s)).toBeUndefined();
  });
  test('mutate reverse string', () => {
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
  });
});
