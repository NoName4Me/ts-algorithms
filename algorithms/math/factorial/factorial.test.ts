import { expect } from 'chai';
import factorial from './factorial';
import factorialRecursive from './factorialRecursive';

describe('Factorial',()=> {
  it('iterative way', () => {
    expect(factorial(-1)).to.equal(1);
    expect(factorial(0)).to.equal(1);
    expect(factorial(1)).to.equal(1);
    expect(factorial(2)).to.equal(2);
    expect(factorial(3)).to.equal(6);
  });

  it('recursive way', () => {
    expect(factorialRecursive(-1)).to.equal(1);
    expect(factorialRecursive(0)).to.equal(1);
    expect(factorialRecursive(1)).to.equal(1);
    expect(factorialRecursive(2)).to.equal(2);
    expect(factorialRecursive(3)).to.equal(6);
  });
});