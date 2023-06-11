const validAnagram = require('./validAnagram');

describe('valid anagram', () => {
  test('returns a string', () => {
    const inputS = 'anagram';
    const inputT = 'nagaram';
    expect(typeof validAnagram(inputS, inputT)).toBe('boolean');
  });

  test('returns true', () => {
    const inputS = 'anagram';
    const inputT = 'nagaram';
    expect(validAnagram(inputS, inputT)).toBeTruthy();
  });

  test('returns false', () => {
    const inputS = 'rat';
    const inputT = 'car';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('empty arguments returns false', () => {
    const inputS = '';
    const inputT = '';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('empty arguments returns false', () => {
    const inputS = '';
    const inputT = 'asdf';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });

  test('empty arguments returns false', () => {
    const inputS = 'adf';
    const inputT = '';
    expect(validAnagram(inputS, inputT)).toBeFalsy();
  });
});
