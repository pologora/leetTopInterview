const validAnagram = require('./validAnagram');

describe('valid anagram', () => {
  test('returns boolean', () => {
    const inputS = 'anagram';
    const inputT = 'nagaram';
    expect(typeof validAnagram(inputS, inputT)).toBe('boolean');
  });

  test('returns true when strings are anagrams', () => {
    const inputS = 'anagram';
    const inputT = 'nagaram';
    expect(validAnagram(inputS, inputT)).toBeTruthy();
  });

  test('returns false when strings are not anagrams', () => {
    const inputS = 'rat';
    const inputT = 'car';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('both strings empty should return true', () => {
    const inputS = '';
    const inputT = '';
    expect(validAnagram(inputS, inputT)).toBeTruthy();
  });

  test('first string empty should return false', () => {
    const inputS = '';
    const inputT = 'asdf';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('second string empty should return false', () => {
    const inputS = 'adf';
    const inputT = '';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('when first string length is bigger then second should return false', () => {
    const inputS = 'adf';
    const inputT = 'a';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('when second string length is bigger then first should return false', () => {
    const inputS = 'adf';
    const inputT = 'adfdf';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });
});
