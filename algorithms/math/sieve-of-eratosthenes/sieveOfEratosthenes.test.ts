import { expect } from 'chai';
import sieveOfEratosthenes from './sieveOfEratosthenes';

describe('sieve of eratosthenes', () => {
  it('list of primes of N', () => {
    expect(sieveOfEratosthenes(2)).to.deep.equal([2]);
    expect(sieveOfEratosthenes(3)).to.deep.equal([2, 3]);
    expect(sieveOfEratosthenes(4)).to.deep.equal([2, 3]);
    expect(sieveOfEratosthenes(5)).to.deep.equal([2, 3, 5]);
    expect(sieveOfEratosthenes(6)).to.deep.equal([2, 3, 5]);
    expect(sieveOfEratosthenes(32)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  })
})