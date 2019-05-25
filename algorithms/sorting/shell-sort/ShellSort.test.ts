import {
  SortTester,
} from '../SortTester';
import ShellSort from './ShellSort';


describe('ShellSort', () => {
  it('should sort array', () => {
    SortTester.testSort(ShellSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(ShellSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(ShellSort);
  });

  // it('should not do stable sorting', () => {
  //   SortTester.testSortStability(InsertionSort);
  // });
});