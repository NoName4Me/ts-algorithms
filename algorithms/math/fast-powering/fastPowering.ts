import isEven from "../bits/isEven";

/**
 * pow(x, y)
 * if y % 2 === 0, pow(x, y) = pow(x, y / 2) * pow(x, y / 2)
 * else pow(x, y) = pow(x, y // 2) * pow(x, y // 2) * x
 * 
 * @param x 
 * @param n 
 */
export default function fastPowering(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (isEven(n)) {
    const halfPowered: number = fastPowering(x, n / 2);
    return halfPowered * halfPowered;
  }

  const halfPowered = fastPowering(x, Math.floor(n / 2));
  return halfPowered * halfPowered * x;
}