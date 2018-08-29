/**
 * goldRatio = (sqrt(5) + 1) / 2
 * Fn = floor(goldRatio ** n / sqrt(5) + 0.5)
 * OR, Fn = round(goldRatio ** n / sqrt(5))
 * see: https://en.wikipedia.org/wiki/Fibonacci_number#Closed-form_expression
 * @param n 
 */
export default function fibonacciClosedForm(n: number): number {
  const topMaxValidPosition: number = 75;
  if (n < 1 || n > topMaxValidPosition) {
    throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
  }

  const sqrt5: number = Math.sqrt(5);
  const goldRatio: number = (sqrt5 + 1) / 2;
  return Math.round(goldRatio ** n / sqrt5);
}