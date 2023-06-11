const firstUniqChar = (s) => {
  const count = new Array(26).fill(0);
  const index = new Array(26).fill(-1);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const pos = s.charCodeAt(i) - aCode;
    count[pos] += 1;
    if (index[pos] === -1) index[pos] = i;
  }

  let firstUniq = Infinity;
  for (let i = 0; i < 26; i++) {
    if (count[i] === 1) firstUniq = Math.min(firstUniq, index[i]);
  }

  return firstUniq === Infinity ? -1 : firstUniq;
};

module.exports = firstUniqChar;
