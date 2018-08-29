import { expect } from 'chai';
import pascalTriangle from './pascalTriangle';
import pascalTriangleRecursive from './pascalTriangleRecursive';
describe('pascal triangle', () => {
  it('iterative way', () => {
    expect(pascalTriangle(0)).deep.equal([1]);
    expect(pascalTriangle(1)).deep.equal([1, 1]);
    expect(pascalTriangle(2)).deep.equal([1, 2, 1]);
    expect(pascalTriangle(3)).deep.equal([1, 3, 3, 1]);
    expect(pascalTriangle(4)).deep.equal([1, 4, 6, 4, 1]);
    expect(pascalTriangle(5)).deep.equal([1, 5, 10, 10, 5, 1]);
  });

  it('definition recursive way', () => {
    expect(pascalTriangleRecursive(0)).deep.equal([1]);
    expect(pascalTriangleRecursive(1)).deep.equal([1, 1]);
    expect(pascalTriangleRecursive(2)).deep.equal([1, 2, 1]);
    expect(pascalTriangleRecursive(3)).deep.equal([1, 3, 3, 1]);
    expect(pascalTriangleRecursive(4)).deep.equal([1, 4, 6, 4, 1]);
    expect(pascalTriangleRecursive(5)).deep.equal([1, 5, 10, 10, 5, 1]);
  })
})