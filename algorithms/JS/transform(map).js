export default function map(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]), i);
  }

  return newArray;
}

const fn = (n) => n + 1;
const arr = [2, 3, 4];
console.log(map(arr, fn));
