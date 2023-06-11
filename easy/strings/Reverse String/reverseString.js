/* eslint-disable no-param-reassign */
const reverseString = function (s) {
  let lastIndex = s.length - 1;

  for (let i = 0; i < s.length && i < lastIndex; i++) {
    const temp = s[i];
    s[i] = s[lastIndex];
    s[lastIndex] = temp;
    lastIndex += 1;
  }
};

module.exports = reverseString;
