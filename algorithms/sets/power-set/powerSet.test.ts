import { expect } from 'chai';
import backTrackingPowerSet from './backTrackingPowerSet';

describe('', () => {
  it('', () => {
    expect(backTrackingPowerSet([])).to.deep.equal([[]]);
    expect(backTrackingPowerSet([1])).to.deep.equal([[], [1]]);
    expect(backTrackingPowerSet(['x', 'y', 'z'])).to.deep.equal([[], ['x'], ['x', 'y'], ['x', 'y', 'z'], ['x', 'z'], ['y'], ['y', 'z'], ['z']]);
  });
})