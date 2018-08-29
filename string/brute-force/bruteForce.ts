export default function bruteForce(mainStr: string, modStr: string): number {
  if (mainStr === modStr) {
    return 0;
  }

  const mainStrLength = mainStr.length;
  const modStrLength = modStr.length;

  if (mainStrLength <= modStrLength) {
    return -1;
  }

  if (modStrLength === 0) {
    return 0;
  }

  for (let i = 0; i < mainStrLength - modStrLength + 1; i++) {
    for (let j = 0; j < modStrLength; j++) {
      if (mainStr.charCodeAt(i + j) !== modStr.charCodeAt(j)) {
        break;
      }

      if (j === modStrLength - 1) {
        return i;
      }
    }
  }

  return -1;
}
