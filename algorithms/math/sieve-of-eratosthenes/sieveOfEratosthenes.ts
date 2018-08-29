export default function sieveOfEratosthenes(n: number): number[] {
  let isPrime: boolean[] = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  const primes: number[] = [];

  /**
   * see: https://github.com/trekhleb/javascript-algorithms/blob/5e0e571a5cd7957b0560d785eaad4cdb36266451/src/algorithms/math/sieve-of-eratosthenes/sieveOfEratosthenes.js#L17
   * Optimisation.
   * Start marking multiples of `p` from `p * p`, and not from `2 * p`.
   * The reason why this works is because, at that point, smaller multiples
   * of `p` will have already been marked `false`.
   *
   * Warning: When working with really big numbers, the following line may cause overflow
   * In that case, it can be changed to:
   * let nextNumber = 2 * number;
   */
  for (let i: number = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);

      let j: number = i * i;
      while (j <= n) {
        isPrime[j] = false;
        j += i;
      }
    }
  }
  return primes;
}