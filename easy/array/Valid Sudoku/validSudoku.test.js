const { isValidSudoku, isNoDuplicates } = require('./validSudoku');

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const boardFalse = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

describe('valid sudoku', () => {
  test('return boolean', () => {
    expect(typeof isValidSudoku(board)).toBe('boolean');
  });
  test('return true', () => {
    expect(isValidSudoku(board)).toBeTruthy();
  });
  test('return false', () => {
    expect(isValidSudoku(boardFalse)).toBeFalsy();
  });
});

describe('isNoDuplicate finds duplicates in array', () => {
  const arrWithDuplicates = [1, 2, 3, 3];
  const arrWithNoDuplicates = [1, 2, 5];
  const arrWithNoDuplicatesAndWithDots = [1, 2, '.', 5, '.'];
  const arrWithDuplicatesAndWithDots = [1, 2, 3, 3, '.', 5, '.'];

  test('return bolean', () => {
    expect(typeof isNoDuplicates(arrWithDuplicates)).toBe('boolean');
  });
  test('return true', () => {
    expect(isNoDuplicates(arrWithNoDuplicates)).toBeTruthy();
  });
  test('return false', () => {
    expect(isNoDuplicates(arrWithDuplicates)).toBeFalsy();
  });
  test('return true, no duplicates, are dots', () => {
    expect(isNoDuplicates(arrWithNoDuplicatesAndWithDots)).toBeTruthy();
  });
  test('return false, are duplicates with dots', () => {
    expect(isNoDuplicates(arrWithDuplicatesAndWithDots)).toBeFalsy();
  });
});
