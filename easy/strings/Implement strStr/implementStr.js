module.exports = (haystack, needle) => {
  if (needle.length > haystack.length) return -1;

  let needleCharIndex = 0;
  let firstIndex = null;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      firstIndex = i;

      while (haystack[i] === needle[needleCharIndex]) {
        i += 1;
        needleCharIndex += 1;
        if (needleCharIndex === needle.length) return firstIndex;
      }

      i = firstIndex;
      needleCharIndex = 0;
    }
  }

  return -1;
};
