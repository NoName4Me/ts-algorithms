import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../SortTester';
import MergeSort from './MergeSort';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 209;
const NOT_SORTED_ARRAY_VISITING_COUNT = 209;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 209;

describe('MergeSort', () => {
  it('should sort array', () => {
    // console.log(typeof new MergeSort().callbacks)
    SortTester.testSort(MergeSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(MergeSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(MergeSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(MergeSort);
  });

  /*
    it('should visit EQUAL array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        MergeSort,
        equalArr,
        EQUAL_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        MergeSort,
        sortedArr,
        SORTED_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit NOT SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        MergeSort,
        notSortedArr,
        NOT_SORTED_ARRAY_VISITING_COUNT,
      );
    });
  
    it('should visit REVERSE SORTED array element specified number of times', () => {
      SortTester.testAlgorithmTimeComplexity(
        MergeSort,
        reverseArr,
        REVERSE_SORTED_ARRAY_VISITING_COUNT,
      );
    });
    //*/
});