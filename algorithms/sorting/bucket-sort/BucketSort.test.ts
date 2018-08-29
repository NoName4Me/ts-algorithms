import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
} from '../SortTester';

import BucketSort from './BucketSort';
import { expect } from 'chai';

describe('BucketSort', () => {
  it('should sort array', () => {
    expect(new BucketSort().sort([...equalArr], 5)).deep.equal(equalArr);
    expect(new BucketSort().sort([...notSortedArr], 4)).deep.equal(sortedArr);
    expect(new BucketSort().sort([...reverseArr], 6)).deep.equal(sortedArr);
  });
});