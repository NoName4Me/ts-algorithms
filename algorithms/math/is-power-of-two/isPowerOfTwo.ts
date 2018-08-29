export default function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  let dividedNumber: number = n;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber /= 2;
  }
  return true;
}