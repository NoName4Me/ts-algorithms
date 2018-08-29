/**
 * recursvie way
 * @param n 
 */
export default function factorialRecursive(n: number): number {
  return n > 1 ? n * factorialRecursive(n - 1) : 1;
}