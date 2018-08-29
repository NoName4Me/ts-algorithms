import { expect } from 'chai';
import cartesianProduct from './cartesianProduct';

describe('cartesian product', () => {
  it('case 1', () => {
    expect(cartesianProduct([1], [1])).to.deep.equal([[1, 1]]);
    expect(cartesianProduct([1], [1, 2])).to.deep.equal([[1, 1], [1, 2]]);
    expect(cartesianProduct([1, 2], [1])).to.deep.equal([[1, 1], [2, 1]]);
    expect(cartesianProduct([1, 2], [3, 4])).to.deep.equal([[1, 3], [1, 4], [2, 3], [2, 4]]);
  })
});