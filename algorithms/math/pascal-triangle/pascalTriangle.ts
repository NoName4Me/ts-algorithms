/**
 * zero-base, NCK = NCK-1 * (n + 1 - k) / k
 * 
 * see: https://en.wikipedia.org/wiki/Pascal%27s_triangle
 * @param whichLine 
 */
export default function pascalTriangle(whichLine:number = 0):number[] {
  let lineNumbers:number[] = [1];

  for (let i: number = 1; i <= whichLine;i++) {
    lineNumbers[i] = lineNumbers[i - 1] * (whichLine + 1 - i) / i;
  }
  return lineNumbers;
}