import Comparator from "../../../utils/Comparator";
import linearSearch from "../linear-search/linearSearch";

/**
 * Jump(block) search implementation
 * 
 * @param arr 
 * @param item 
 * @param comparatorCallback 
 */
export default function jumpSearch<T>(arr: T[], item: T, comparatorCallback?: Function): number {
  const comparator = new Comparator(comparatorCallback);

  const arrSize = arr.length;
  if (!arrSize) {
    return -1;
  }
  const jumpStepSize: number = Math.floor(Math.sqrt(arrSize));

  let jumpStartIndex = 0, jumpEndIndex = jumpStepSize;
  while (jumpStartIndex <= arrSize && comparator.greaterThan(item, arr[Math.min(jumpEndIndex, arrSize) - 1])) {
    jumpStartIndex = jumpEndIndex;
    jumpEndIndex += jumpStepSize;
  }

  // linear search
  const searchEndIndex = Math.min(jumpEndIndex, arrSize);
  for (let i = jumpStartIndex; i < searchEndIndex; i++) {
    if (comparator.equal(item, arr[i])) {
      return i;
    }
  }

  return -1;
}