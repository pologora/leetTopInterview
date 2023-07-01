// https://leetcode.com/problems/group-anagrams/
// import isAnagram from './validAnagram';

const data = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

export default function groupAnagrams(strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedKey = strs[i].split('').sort().join('');

    if (!map.has(sortedKey)) {
      map.set(sortedKey, [strs[i]]);
    } else {
      map.get(sortedKey).push(strs[i]);
    }
  }

  const result = [];
  map.forEach((value) => {
    result.push(value);
  });

  return result;
}

console.log(groupAnagrams(data));
