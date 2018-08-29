import { expect } from 'chai';
import nQueens from './nQueens';

function printSolution(board: number[][]): void {
  console.log(board.map(item=>item.join(' ')).join('\n'));
}

describe('N Queens solution', () => {
  it('test N = 4', () => {
    printSolution(nQueens(4));
  });

  it('test N = 8', () => {
    printSolution(nQueens(8));
  });
});