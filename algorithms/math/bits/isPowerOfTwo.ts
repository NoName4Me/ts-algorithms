/**
 * if a number is power of two
 * then `&` between the `number` an `number - 1` is `0`
 * 
 * @param num 
 */
export default function isPowerOfTwo(num: number): boolean {
  return (num & (num - 1)) === 0;
}