import { expect } from 'chai';
import fisherYates from './fisherYates';
describe('fisher yates shuffle', () => {
  it('should shuffle small array', () => {
    expect(fisherYates([])).to.deep.equal([]);
    expect(fisherYates([1])).to.deep.equal([1]);
  })

  it('should shuffle randomly, probably fail, that\'s ok', () => {
    const list: number[] = [1, 2, 3, 4];
    const shuffled:number[] = fisherYates(list);
    expect(shuffled.sort()).to.deep.equal(list);
    expect(fisherYates(shuffled)).to.not.deep.equal(list);
  })
})