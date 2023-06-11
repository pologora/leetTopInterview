module.exports = (s, t) => {
  if (!s || !t) return false;
  if (s.length !== t.length) return false;

  const hashTableS = {};
  const hashTableT = {};

  for (let i = 0; i < s.length; i++) {
    hashTableS[s[i]] = (hashTableS[s[i]] ? hashTableS[s[i]] : 0) + 1;
    hashTableT[t[i]] = (hashTableT[t[i]] ? hashTableT[t[i]] : 0) + 1;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in hashTableS) {
    if (hashTableS[key] !== hashTableT[key]) return false;
  }

  return true;
};
