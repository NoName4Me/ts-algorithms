import { expect } from 'chai';
import fibonacciNthClosedForm from './fibonacciNthClosedForm';
import fibonacciNth from './fibonacciNth';
import fibonacciNthRecursive from './fibonacciNthRecursive';
import fibonacci from './fibonacci';

describe('Factorial', () => {
  it('iterative way', () => {
    expect(fibonacciNth(1)).to.equal(1);
    expect(fibonacciNth(2)).to.equal(1);
    expect(fibonacciNth(3)).to.equal(2);
    expect(fibonacciNth(4)).to.equal(3);
    expect(fibonacciNth(5)).to.equal(5);
    expect(fibonacciNth(6)).to.equal(8);
    expect(fibonacciNth(75)).to.equal(2111485077978050);
  });

  it('recursive way', () => {
    expect(fibonacciNthRecursive(1)).to.equal(1);
    expect(fibonacciNthRecursive(2)).to.equal(1);
    expect(fibonacciNthRecursive(3)).to.equal(2);
    expect(fibonacciNthRecursive(4)).to.equal(3);
    expect(fibonacciNthRecursive(5)).to.equal(5);
    expect(fibonacciNthRecursive(6)).to.equal(8);
    expect(fibonacciNthRecursive(75)).to.equal(2111485077978050);
  });

  it('nth closed form', () => {
    expect(() => fibonacciNthClosedForm(-1)).throw;
    expect(() => fibonacciNthClosedForm(76)).throw;
    expect(fibonacciNthClosedForm(1)).to.equal(1);
    expect(fibonacciNthClosedForm(2)).to.equal(1);
    expect(fibonacciNthClosedForm(3)).to.equal(2);
    expect(fibonacciNthClosedForm(4)).to.equal(3);
    expect(fibonacciNthClosedForm(5)).to.equal(5);
    expect(fibonacciNthClosedForm(6)).to.equal(8);
    expect(fibonacciNthClosedForm(75)).to.equal(2111485077978050);
  });

  it('recursive way', () => {
    expect(fibonacci(1)).to.deep.equal([1]);
    expect(fibonacci(2)).to.deep.equal([1, 1]);
    expect(fibonacci(3)).to.deep.equal([1, 1, 2]);
  });
})