import { expect } from 'chai';
import { firstEqual, firstGreaterOrEqual, lastEqual, lastLessOrEqual } from './binarySearch';

describe('binary search test', () => {
  it('first equal', () => {
    expect(firstEqual([2], 7)).to.equal(-1);
    expect(firstEqual([2], 2)).to.equal(0);
    expect(firstEqual([1, 3, 5, 7, 8, 12], 5)).to.equal(2);
    expect(firstEqual([1, 3, 5, 7, 8, 12], 7)).to.equal(3);
    expect(firstEqual([1, 3, 5, 7, 8, 12], 1)).to.equal(0);
    expect(firstEqual([1, 3, 5, 7, 8, 12], 12)).to.equal(5);
    expect(firstEqual([1, 3, 5, 5, 7, 8, 12, 13], 5)).to.equal(2);
    expect(firstEqual([1, 1, 5, 7, 8, 13, 13], 1)).to.equal(0);
    expect(firstEqual([1, 1, 5, 7, 8, 13, 13], 13)).to.equal(5);
  });

  it('first greater or equal', () => {
    expect(firstGreaterOrEqual([2], 7)).to.equal(-1);
    expect(firstGreaterOrEqual([2], 1)).to.equal(0);
    expect(firstGreaterOrEqual([1, 3, 5, 7, 8, 12], 5)).to.equal(2);
    expect(firstGreaterOrEqual([1, 3, 5, 7, 8, 12], 7)).to.equal(3);
    expect(firstGreaterOrEqual([1, 3, 5, 7, 8, 12], 1)).to.equal(0);
    expect(firstGreaterOrEqual([1, 3, 5, 7, 8, 12], 12)).to.equal(5);
    expect(firstGreaterOrEqual([1, 3, 5, 5, 7, 8, 12, 13], 5)).to.equal(2);
    expect(firstGreaterOrEqual([1, 1, 5, 7, 8, 13, 13], 1)).to.equal(0);
    expect(firstGreaterOrEqual([1, 1, 5, 7, 8, 13, 13], 13)).to.equal(5);
  });

  it('last equal', () => {
    expect(lastEqual([2], 7)).to.equal(-1);
    expect(lastEqual([2], 2)).to.equal(0);
    expect(lastEqual([1, 3, 5, 7, 8, 12], 5)).to.equal(2);
    expect(lastEqual([1, 3, 5, 7, 8, 12], 7)).to.equal(3);
    expect(lastEqual([1, 3, 5, 7, 8, 12], 1)).to.equal(0);
    expect(lastEqual([1, 3, 5, 7, 8, 12], 12)).to.equal(5);
    expect(lastEqual([1, 3, 5, 5, 7, 8, 12, 13], 5)).to.equal(3);
    expect(lastEqual([1, 1, 5, 7, 8, 13, 13], 1)).to.equal(1);
    expect(lastEqual([1, 1, 5, 7, 8, 13, 13], 13)).to.equal(6);
  });

  it('last less or equal', () => {
    expect(lastLessOrEqual([2], 7)).to.equal(0);
    expect(lastLessOrEqual([2], 1)).to.equal(-1);
    expect(lastLessOrEqual([1, 3, 5, 7, 8, 12], 5)).to.equal(2);
    expect(lastLessOrEqual([1, 3, 5, 7, 8, 12], 7)).to.equal(3);
    expect(lastLessOrEqual([1, 3, 5, 7, 8, 12], 1)).to.equal(0);
    expect(lastLessOrEqual([1, 3, 5, 7, 8, 12], 12)).to.equal(5);
    expect(lastLessOrEqual([1, 3, 5, 5, 7, 8, 12, 13], 7)).to.equal(4);
    expect(lastLessOrEqual([1, 1, 5, 7, 8, 13, 13], 1)).to.equal(1);
    expect(lastLessOrEqual([1, 1, 5, 7, 8, 13, 13], 13)).to.equal(6);
  });
})