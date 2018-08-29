export default function isPositive(num: number): boolean {
  if (num === 0) {
    return false;
  }
  return ((num >> 31) & 1) === 0;
}