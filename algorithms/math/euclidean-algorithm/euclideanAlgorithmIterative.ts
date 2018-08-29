export default function euclideanAlgorithmIterative(a: number, b: number): number {
  let positiveA: number = Math.abs(a);
  let positiveB: number = Math.abs(b);
  while (positiveA && positiveB && positiveA !== positiveB) {
    [positiveA, positiveB] = positiveA > positiveB
      ? [positiveA - positiveB, positiveB]
      : [positiveA, positiveB - positiveA];
  }
  return positiveA || positiveB;
}