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

// const firstColumn = [0][0], [0][3], [0][6] - [3][0], [3][3], [3][6] - [6][0], [6][3], [6][6]
// const secondColumn = [0][1], [0][4], [0][7] - [3][1], [3][4], [3][7] - [6][1], [6][4], [6][7]
// const thirdColumn = [0][2], [0][5], [0][8] - [3][2], [3][5], [3][6] - [6][2], [6][5], [6][8]

const isNoDuplicates = (arr) => {
  const arrayOfNumbers = arr.filter((item) => {
    return !Number.isNaN(+item);
  });

  return arrayOfNumbers.length === new Set(arrayOfNumbers).size;
};

var isValidSudoku = function (board) {
  const rows = Array(9).fill([]);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      rows[j].push(board[i][j]);
    }
    // if (!isNoDuplicates(board[i])) return false;
  }
  console.log(rows);
  return true;
};

module.exports = { isValidSudoku, isNoDuplicates };
