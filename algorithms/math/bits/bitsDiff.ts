import countSetBits from "./countSetBits";

/**
 * eg: 5: 0101, 1: 0001  --> 1: countSetBits(4:0b0100)
 * 
 * @param a 
 * @param b 
 */
export default function bitsDiff(a: number, b: number): number {
  return countSetBits(a ^ b);
}