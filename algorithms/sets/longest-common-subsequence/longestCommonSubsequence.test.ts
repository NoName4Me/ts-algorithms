import { expect } from 'chai';
import longestCommonSubsequence from './longestCommonSubsequence';

describe('longest common subsequence', () => {
  it('empty test', () => {
    expect(longestCommonSubsequence([], [])).to.deep.equal([]);
    expect(longestCommonSubsequence(['A', 'C'], ['B'])).to.deep.equal([]);
  });

  it('normal test', () => {
    expect(longestCommonSubsequence(['A', 'G', 'C', 'A', 'T'], ['G', 'A', 'C'])).to.deep.equal(['A','C']);
  });
})