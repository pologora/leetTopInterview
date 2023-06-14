/* eslint-disable operator-linebreak */
const isAlphanumeric = (char) => {
  if (!char) return false;
  const charCode = char.charCodeAt(0);
  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122) ||
    (charCode >= 48 && charCode <= 57)
  ) {
    return true;
  }
  return false;
};

module.exports = (s) => {
  let rightPoint = s.length - 1;

  for (let i = 0; i < s.length && i < rightPoint; i++) {
    while (!isAlphanumeric(s[i]) && i < rightPoint) {
      i += 1;
    }

    while (!isAlphanumeric(s[rightPoint]) && i < rightPoint) {
      rightPoint -= 1;
    }

    if (s[i].toLowerCase() !== s[rightPoint].toLowerCase()) {
      return false;
    }

    rightPoint -= 1;
  }

  return true;
};
