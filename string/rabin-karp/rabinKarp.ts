export default function rabinKarp(mainStr: string, patternStr: string): number {
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

  const allSubstringHash = new Array(mainStrLength - patternStrLength + 1).fill(0);
  allSubstringHash[0] = hash(mainStr.substring(0, patternStrLength));
  for (let i = 1; i < allSubstringHash.length; i++) {
    allSubstringHash[i] = allSubstringHash[i - 1] - hash(mainStr[i - 1]) + hash(mainStr[i + patternStrLength - 1])
  }


  const patternHash = hash(patternStr);

  for (let i = 0; i < allSubstringHash.length; i++) {
    if (patternHash === allSubstringHash[i] && patternStr === mainStr.slice(i, i + patternStrLength)) {
      return i;
    }
  }

  return -1;
}

/**
 * simple hash function: reduce charCode
 * 
 * @param str 
 */
function hash(str: string): number {
  return str.split('').reduce((result, charactor) => {
    return result += charactor.charCodeAt(0);
  }, 0)
}