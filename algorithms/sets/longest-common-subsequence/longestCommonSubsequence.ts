

export default function longestCommonSubsequence<T>(set1: T[], set2: T[]): T[] {
  const lcsMatrix: number[][] = Array(set2.length + 1).fill(0).map(() => Array(set1.length + 1).fill(0));

  
  for (let rowIdx = 1; rowIdx <= set2.length; rowIdx++) {
    for (let columnIdx: number = 1; columnIdx <= set1.length; columnIdx++) {
      if (set2[rowIdx - 1] === set1[columnIdx - 1]) {
        lcsMatrix[rowIdx][columnIdx] = lcsMatrix[rowIdx - 1][columnIdx - 1] + 1;
      } else {
        lcsMatrix[rowIdx][columnIdx] = Math.max(lcsMatrix[rowIdx - 1][columnIdx], lcsMatrix[rowIdx][columnIdx - 1]);
      }
    }
  }
  
  // no common item
  if(!lcsMatrix[set2.length][set1.length]) {
    return [];
  }

  // backtracking matrix to get LCS
  const lcsSet: T[] = [];
  let rowIdx: number = set2.length;
  let columnIdx: number = set1.length;
  while (rowIdx > 0 || columnIdx > 0) {
    if (set2[rowIdx - 1] === set1[columnIdx - 1]) {
      lcsSet.unshift(set2[rowIdx - 1]);
      rowIdx--;
      columnIdx--;
    } else if (lcsMatrix[rowIdx][columnIdx] === lcsMatrix[rowIdx][columnIdx - 1]) {
      // 向左
      columnIdx--;
    } else {
      // 向上
      rowIdx--;
    }
  }
  return lcsSet;
}