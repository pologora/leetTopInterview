/* eslint-disable comma-dangle */
// https://leetcode.com/problems/group-anagrams/
// import isAnagram from './validAnagram';

const data = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// export default function groupAnagrams(strs) {
//   const map = new Map();

//   for (let i = 0; i < strs.length; i++) {
//     const sortedKey = strs[i].split('').sort().join('');

//     if (!map.has(sortedKey)) {
//       map.set(sortedKey, [strs[i]]);
//     } else {
//       map.get(sortedKey).push(strs[i]);
//     }
//   }

//   const result = [];
//   map.forEach((value) => {
//     result.push(value);
//   });

//   return result;
// }

export default function groupAnagrams(strs) {
  const map = new Map();
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i]
      .split('')
      .reduce(
        (total, char) => total * primes[char.charCodeAt(0) - 'a'.charCodeAt(0)],
        1
      );

    if (!map.has(key)) {
      map.set(key, [strs[i]]);
    } else {
      map.get(key).push(strs[i]);
    }
  }

  const result = [];
  map.forEach((value) => {
    result.push(value);
  });

  return result;
}

console.log(groupAnagrams(data));
