import { expect } from 'chai';
import linearSearch from './linearSearch';

describe('linear search test', () => {
  it('should return the found index', () => {
    expect(linearSearch([], 7)).to.equal(-1);
    expect(linearSearch([2], 7)).to.equal(-1);
    expect(linearSearch([2], 2)).to.equal(0);
    expect(linearSearch([1, 3, 5, 7, 8, 12], 5)).to.equal(2);
    expect(linearSearch([1, 3, 5, 7, 8, 12], 7)).to.equal(3);
    expect(linearSearch([1, 3, 5, 7, 8, 12], 1)).to.equal(0);
    expect(linearSearch([1, 3, 5, 7, 8, 12], 12)).to.equal(5);
    expect(linearSearch([1, 3, 5, 5, 7, 8, 12, 13], 5)).to.equal(2);
    expect(linearSearch([1, 1, 5, 7, 8, 13, 13], 1)).to.equal(0);
    expect(linearSearch([1, 1, 5, 7, 8, 13, 13], 13)).to.equal(5);
  })
})