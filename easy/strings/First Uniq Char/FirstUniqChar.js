module.exports = (s) => {
  const uniqChar = -1;
  if (!s) return uniqChar;
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashTable[s[i]]) {
      hashTable[s[i]] = { quantity: 1, index: i };
    } else {
      hashTable[s[i]].quantity += 1;
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const char of Object.keys(hashTable)) {
    if (hashTable[char].quantity === 1) return hashTable[char].index;
  }

  return uniqChar;
};
