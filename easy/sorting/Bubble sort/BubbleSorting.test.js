const BubbleSorting = require('./BubbleSorting');

describe('Bubble sorting', () => {
  test('returns sorted array', () => {
    const arrs = [
      [1, 2, 3],
      [2, 3, 99, 2, 5],
      [54, 4, 9, 8, 2, 1, 8, 9],
    ];
    BubbleSorting(arrs[0]);
    expect(arrs[0]).toEqual([1, 2, 3]);

    BubbleSorting(arrs[1]);
    expect(arrs[1]).toEqual([2, 2, 3, 5, 99]);

    BubbleSorting(arrs[2]);
    expect(arrs[2]).toEqual(arrs[2].sort((a, b) => a - b));
  });

  test('returns empty array for an empty input', () => {
    const arr = [];
    BubbleSorting(arr);
    expect(arr).toEqual([]);
  });

  test('returns the same array for a single-item array input', () => {
    const arr = [4];
    BubbleSorting(arr);
    expect(arr).toEqual([4]);
  });

  test('returns sorted array with negative numbers', () => {
    const arr = [5, -2, 7, -8, 0, 1];
    BubbleSorting(arr);
    expect(arr).toEqual([-8, -2, 0, 1, 5, 7]);
  });
});
