const reverse = require('./reverseInterger');

describe('reverse integer', () => {
  const number = 123;

  test('function returns number', () => {
    expect(typeof reverse(number)).toBe('number');
  });

  test('function return reverse number', () => {
    expect(reverse(number)).toBe(321);
  });

  test('function return negative number, if it was given befor', () => {
    expect(reverse(-123)).toBe(-321);
  });

  test('big number return 0', () => {
    // outside the signed 32-bit integer range [-2**31, 2**31 - 1] after reverse
    const bigNumber = 2117483699;
    expect(reverse(bigNumber)).toBe(0);
  });

  test('big number negative returns 0', () => {
    // outside the signed 32-bit integer range [-2**31, 2**31 - 1] after reverse
    const bigNumber = -2117483699;
    expect(reverse(bigNumber)).toBe(0);
  });
});
