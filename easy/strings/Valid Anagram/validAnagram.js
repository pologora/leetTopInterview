module.exports = (s, t) => {
  if (s.length !== t.length) return false;
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
    hashTable[t[i]] = (hashTable[t[i]] || 0) - 1;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in hashTable) {
    if (hashTable[key] !== 0) return false;
  }

  return true;
};
