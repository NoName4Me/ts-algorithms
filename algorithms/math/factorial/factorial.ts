/**
 * iterative way
 * @param n 
 */
export default function factorial(n: number): number {
  let result: number = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}