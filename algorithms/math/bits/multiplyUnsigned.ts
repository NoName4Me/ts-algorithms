import isPositive from "./isPositive";

/**
 * 19 = 2^4 + 2^1 + 2^0
 * Then multiplying number x by 19 is equivalent of:
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 * 
 * @param a 
 * @param b 
 */
export default function multiplyUnsigned(a: number, b: number): number {
  if (!isPositive(b)) {
    throw new Error('muliplier is signed number!');
  }
  let result: number = 0;
  let multiplier: number = b;
  let bitIndex: number = 0;
  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += a << bitIndex
    }
    bitIndex++;
    multiplier >>= 1;
  }
  return result;
}