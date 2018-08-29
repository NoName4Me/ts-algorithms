import { expect } from 'chai';
import fastPowering from './fastPowering';

describe('fast power test', () => {
  it('out put should be the power y of x', () => {
    expect(fastPowering(-3, 0)).to.equal(1);
    expect(fastPowering(-3, 1)).to.equal(-3);
    expect(fastPowering(-3, 2)).to.equal(9);
    expect(fastPowering(-3, 3)).to.equal(-27);
    expect(fastPowering(3, 3)).to.equal(27);
  })
})