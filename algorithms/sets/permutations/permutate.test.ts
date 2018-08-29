import { expect } from 'chai';
import permutateWithoutRepetation from './permutateWithoutRepetations';
import permutateWithRepetation from './permutateWithRepetations';

describe('permutate test', () => {
  it('without repetation', () => {
    expect(permutateWithoutRepetation([1])).to.deep.equal([[1]]);
    expect(permutateWithoutRepetation([1, 2])).to.deep.equal([[1, 2], [2, 1]]);
    expect(permutateWithoutRepetation(['A', 'B', 'C'])).to.deep.equal([
      ['A', 'B', 'C'],
      ['B', 'A', 'C'],
      ['B', 'C', 'A'],
      ['A', 'C', 'B'],
      ['C', 'A', 'B'],
      ['C', 'B', 'A']
    ]);
  });

  it('with repetation', () => {

    expect(permutateWithRepetation([1])).to.deep.equal([[1]]);
    expect(permutateWithRepetation([1, 2])).to.deep.equal([[1, 1], [1, 2], [2, 1], [2, 2]]);
    expect(permutateWithRepetation(['A', 'B'])).to.deep.equal([
      ['A', 'A'],
      ['A', 'B'],
      ['B', 'A'],
      ['B', 'B']
    ]);
  });
})