import isPositive from "./isPositive";

/**
 * count set bits of a positive number
 * @param num
 * @throws 
 */
export default function countSetBits(num: number): number {
  if(!isPositive(num)) {
    throw new Error('number passed in should be positive!')
  }
  
  let bitCnt: number = 0;
  let sourceNumber: number = num;
  while(sourceNumber) {
    bitCnt += sourceNumber & 1;
    sourceNumber >>= 1;
  }
  return bitCnt;
}