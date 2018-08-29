const cache = {}
/**
 * recursive way
 * 
 * @param n 
 */
export default function fibonacciNthRecursive(n: number): number {
  if (n < 3) {
    return 1;
  }
  if (!cache[n]) {
    cache[n] = fibonacciNthRecursive(n - 1) + fibonacciNthRecursive(n - 2);
  }
  return cache[n];
}