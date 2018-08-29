export default function trialDivision(n: number): boolean {
  // not a integer
  if (n % 1 !== 0) {
    return false;
  }

  if (n <= 1) {
    return false;
  }

  // 2, 3
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  const sqrtN: number = Math.sqrt(n);
  for (let divider: number = 3; divider <= sqrtN; divider += 2) {
    if (n % divider === 0) {
      return false;
    }
  }
  return true;
}