const reverseString = (string) => {
  const array = string.split('');
  let lastIndex = array.length - 1;

  for (let i = 0; i < array.length && i < lastIndex; i++) {
    [array[i], array[lastIndex]] = [array[lastIndex], array[i]];
    lastIndex -= 1;
  }

  return array.join('');
};

const reverse = (x) => {
  let string = x.toString();

  const numberIsNegative = string[0] === '-';

  if (numberIsNegative) {
    string = string.slice(1);
  }

  const reversedString = reverseString(string);
  const number = Number(numberIsNegative ? `-${reversedString}` : reversedString);

  return number > 2 ** 31 - 1 || number < -(2 ** 31) ? 0 : number;
};

module.exports = reverse;
