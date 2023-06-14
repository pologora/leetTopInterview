const validPalindrom = require('./validPalindrom');

describe('***Valid Palindrom***', () => {
  test('should return a bolean', () => {
    expect(typeof validPalindrom('test')).toBe('boolean');
  });

  test('should return true if string is palindrom', () => {
    const palindrom = 'abba';
    expect(validPalindrom(palindrom)).toBeTruthy();
  });

  test('should return true if string includes punktuation, without them is palindrom', () => {
    const palindromWithPuntuation = 'A man, a plan, a canal: Panama';
    expect(validPalindrom(palindromWithPuntuation)).toBeTruthy();
  });

  test('should return true if string is empty', () => {
    expect(validPalindrom('')).toBeTruthy();
  });

  test('should return false if string with punktuation, without them is not palindrom', () => {
    const notPalindrom = 'race a car';
    expect(validPalindrom(notPalindrom)).toBeFalsy();
  });

  test('should return false if string is not palindrom', () => {
    const notPalindrom = 'baramas';
    expect(validPalindrom(notPalindrom)).toBeFalsy();
  });

  test('should return true if string is empty after removing no alphabetic characters', () => {
    const nonAlphabetic = ' ::;,.';
    expect(validPalindrom(nonAlphabetic)).toBeTruthy();
  });
});
