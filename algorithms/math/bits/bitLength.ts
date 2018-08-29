export default function bitLength(num: number): number {
  let bitCnt: number = 0;
  let compare: number = 1;
  while (compare < num) {
    bitCnt++;
    compare <<= 1;
  }

  /* // another solution
  while ((1 << bitCnt) <= num) {
    bitCnt += 1;
  }
  */

  return bitCnt;
}