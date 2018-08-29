export default function isPowerOfTwoBitwise(n: number): boolean {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}