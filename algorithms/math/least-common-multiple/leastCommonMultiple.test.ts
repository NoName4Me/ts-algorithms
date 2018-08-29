import { expect } from 'chai';
import leastCommonMultiple from './leastCommonMultiple';

describe('least common multiple', () => {
  it('should find LCM', () => {
    expect(leastCommonMultiple(0, 0)).to.equal(0);
    expect(leastCommonMultiple(1, 0)).to.equal(0);
    expect(leastCommonMultiple(3, 5)).to.equal(15);
  })
})