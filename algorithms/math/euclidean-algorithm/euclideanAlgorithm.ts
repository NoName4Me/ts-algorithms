/**
 * recursive way
 * instead use `a - b`, `a % b` is fater
 * 
 * @param a 
 * @param b 
 */
export default function euclideanAlgorithm(a: number, b: number): number {
  const positiveA: number = Math.abs(a);
  const positiveB: number = Math.abs(b);

  return positiveB === 0 ? positiveA : euclideanAlgorithm(positiveB, positiveA % positiveB);
}
