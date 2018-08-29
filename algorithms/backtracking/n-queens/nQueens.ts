export default function nQueens(n: number = 8) {
  const board: number[][] = new Array(n).fill(null).map(() => new Array(n).fill(0));

  const usedRow = [0];
  const queensPos: number[][] = new Array(n).fill(null).map(() => []);
  queensPos.push([0, 0]);
  board[0][0] = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (usedRow.indexOf(j) > -1) {
        continue;
      }
      if (isSafe(i, j)) {
        board[i][j] = 1;
        queensPos.push([i, j]);
        usedRow.push(j);
        break;
      }
    }
  }

  return board;

  function isSafe(rowIndex: number, colIndex: number): boolean {
    // to top-left
    let row = rowIndex;
    let col = colIndex;
    while (row >= 0 && col >= 0) {
      if (board[row--][col--]) {
        return false;
      }
    }

    // to bottom-right
    row = rowIndex, col = colIndex;
    while (row < n && col < n) {
      if (board[row++][col++]) {
        return false;
      }
    }

    return true;
  }
}

