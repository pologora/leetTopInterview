const longestCommonPrefix = require('./longestCommonPrefix');

describe('***longest common prefix***', () => {
  test('should return string', () => {
    const strsArray = ['a', 'g', 'c'];
    expect(typeof longestCommonPrefix(strsArray)).toBe('string');
  });

  test('should return common prefix', () => {
    const strs = ['flower', 'flow', 'flight'];
    expect(longestCommonPrefix(strs)).toBe('fl');
  });

  test('should return empty string if there is no common prefix', () => {
    const strs = ['dog', 'racecar', 'car'];
    expect(longestCommonPrefix(strs)).toBe('');
  });
});
