import {
  SortTester,
} from '../SortTester';
import QuickSort from './QuickSort';

describe('QuickSort', () => {
  it('should sort array', () => {
    // console.log(typeof new QuickSort().callbacks)
    SortTester.testSort(QuickSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSort);
  });

  it('should do not stable sorting', () => {
    SortTester.testSortStability(QuickSort);
  });
});