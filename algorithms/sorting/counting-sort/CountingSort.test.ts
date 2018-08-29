import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
} from '../SortTester';

import { expect } from 'chai';
import CountingSort from './CountingSort';

describe('CountingSort', () => {
  it('should sort array', () => {
    expect(new CountingSort().sort([...equalArr])).deep.equal(equalArr);
    expect(new CountingSort().sort([...notSortedArr])).deep.equal(sortedArr);
    expect(new CountingSort().sort([...reverseArr])).deep.equal(sortedArr);
  });

  it('should sort array, way 2', () => {
    expect(new CountingSort().sort2([...equalArr])).deep.equal(equalArr);
    expect(new CountingSort().sort2([...notSortedArr])).deep.equal(sortedArr);
    expect(new CountingSort().sort2([...reverseArr])).deep.equal(sortedArr);
  });
});