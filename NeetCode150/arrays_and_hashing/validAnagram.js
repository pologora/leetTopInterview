/* eslint-disable no-restricted-syntax */
// https://leetcode.com/problems/valid-anagram/

export default function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const charsArray = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const charCodeS = s.charCodeAt(i) - 'a'.charCodeAt(0);
    const charCodeT = t.charCodeAt(i) - 'a'.charCodeAt(0);

    charsArray[charCodeS] += 1;
    charsArray[charCodeT] -= 1;
  }

  return !charsArray.some(Boolean);
}
