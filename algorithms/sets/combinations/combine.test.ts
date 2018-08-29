import { expect } from 'chai';
import combineWithRepetations from './combineWithRepetations';
import combineWithoutRepetations from './combineWithoutRepetations';

describe('combine test', () => {
  it('without repetation', () => {
    expect(combineWithoutRepetations([1], 1)).to.deep.equal([[1]]);
    expect(combineWithoutRepetations([1, 2], 1)).to.deep.equal([[1], [2]]);
    expect(combineWithoutRepetations([1, 2], 2)).to.deep.equal([[1, 2]]);
    expect(combineWithoutRepetations(['A', 'B', 'C'], 1)).to.deep.equal([['A'], ['B'], ['C']]);
    expect(combineWithoutRepetations(['A', 'B', 'C'], 2)).to.deep.equal([['A', 'B'], ['A', 'C'], ['B', 'C']]);
  });

  it('with repetation', () => {
    expect(combineWithRepetations([1], 1)).to.deep.equal([[1]]);
    expect(combineWithRepetations([1, 2], 1)).to.deep.equal([[1], [2]]);
    expect(combineWithRepetations([1, 2], 2)).to.deep.equal([[1, 1], [1, 2], [2, 1], [2, 2]]);
    expect(combineWithRepetations(['A', 'B', 'C'], 1)).to.deep.equal([['A'], ['B'], ['C']]);
    expect(combineWithRepetations(['A', 'B', 'C'], 2)).to.deep.equal([['A', 'A'], ['A', 'B'], ['A', 'C'], ['B', 'A'], ['B', 'B'], ['B', 'C'], ['C', 'A'], ['C', 'B'], ['C', 'C']]);
  });
})