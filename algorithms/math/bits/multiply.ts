import multiplyByTwo from './multiplyByTwo';
import divideByTwo from './divideByTwo';
import isEven from './isEven';
import isPositive from './isPositive';

/**
 * a * b can be written in the below formats:
 * 0                     if a is zero or b is zero or both a and b are zeroes
 * 2a * (b/2)            if b is even
 * 2a * (b - 1)/2 + a    if b is odd and positive
 * 2a * (b + 1)/2 - a    if b is odd and negative
 * 
 * @param a 
 * @param b 
 */
export default function multiply(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }

  return isEven(b) ?
    multiply(multiplyByTwo(a), divideByTwo(b))
    : isPositive(b) ? multiply(multiplyByTwo(a),
      divideByTwo(b - 1)) + a : multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
}