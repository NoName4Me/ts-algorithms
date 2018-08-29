import jumpSearch from "../../algorithms/search/jump-search/jumpSearch";

export default function boyerMoore(mainStr: string, patternStr: string): number {
  if (mainStr === patternStr) {
    return 0;
  }

  const mainStrLength = mainStr.length;
  const patternStrLength = patternStr.length;

  if (mainStrLength <= patternStrLength) {
    return -1;
  }

  if (patternStrLength === 0) {
    return 0;
  }

  const charSetHash = {};

  patternStr.split('').forEach((c, idx) => {
    charSetHash[c] = idx;
  });

  let i = 0;
  while (i <= mainStrLength - patternStrLength) {
    let j;
    for (j = patternStrLength - 1; j >= 0; j--) {
      
      if (patternStr[j] !== mainStr[i + j]) {
        break;
      }
    }
    
    if (j < 0) {
      return i;
    }
    const slideStep:number = charSetHash[mainStr[i + j]];
    i += (j - (slideStep === undefined ? -1 : slideStep));
  }

  return -1;
}