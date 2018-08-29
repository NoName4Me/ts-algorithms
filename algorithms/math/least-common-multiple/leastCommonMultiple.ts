import euclideanAlgorithm from "../euclidean-algorithm/euclideanAlgorithm";

/**
 * LCM(a, b) = |a * b| / GCD(a, b)
 * 
 * @param a 
 * @param b 
 */
export default function leastCommonMultiple(a: number, b: number): number {
  return (a === 0 || b === 0) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}