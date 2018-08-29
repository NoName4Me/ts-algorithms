/**
 * iterative way
 * 
 * @param n 
 */
export default function fibonacciNth(n: number): number {
  if (n === 1) {
    return 1;
  }
  let current: number = 1;
  let previous: number = 0;
  let iterator: number = n - 1;
  while (iterator) {
    current += previous;
    previous = current - previous;
    iterator--;
  }
  return current;
}