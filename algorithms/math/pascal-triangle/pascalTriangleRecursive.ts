/**
 * by definition, calculate current line by previous line
 * 
 * see: https://en.wikipedia.org/wiki/Pascal%27s_triangle
 * @param whichLine 
 */
export default function pascalTriangleRecursive(whichLine: number = 0): number[] {
  if (whichLine === 0) {
    return [1];
  }

  const previousLineSize: number = whichLine;

  const currentLine: number[] = [];
  const previousLine: number[] = pascalTriangleRecursive(previousLineSize - 1);

  for (let i: number = 0; i <= whichLine; i++) {
    const left: number = i >= 1 ? previousLine[i - 1] : 0;
    const right: number = i < previousLineSize ? previousLine[i] : 0;
    currentLine[i] = left + right;
  }
  return currentLine;
}