import { expect } from 'chai';
import euclideanAlgorithmIterative from './euclideanAlgorithmIterative';
import euclideanAlgorithm from './euclideanAlgorithm';

describe('GCD, euclidean algorithms', () => {
  it('iterative way', () => {
    expect(euclideanAlgorithmIterative(0, 0)).to.equal(0);
    expect(euclideanAlgorithmIterative(0, 1)).to.equal(1);
    expect(euclideanAlgorithmIterative(2, 1)).to.equal(1);
    expect(euclideanAlgorithmIterative(3, 5)).to.equal(1);
    expect(euclideanAlgorithmIterative(105, 147)).to.equal(21);
    expect(euclideanAlgorithmIterative(105, -147)).to.equal(21);
    expect(euclideanAlgorithmIterative(-105, -147)).to.equal(21);
  });

  it('recursive way', () => {
    expect(euclideanAlgorithm(0, 0)).to.equal(0);
    expect(euclideanAlgorithm(0, 1)).to.equal(1);
    expect(euclideanAlgorithm(2, 1)).to.equal(1);
    expect(euclideanAlgorithm(3, 5)).to.equal(1);
    expect(euclideanAlgorithm(105, 147)).to.equal(21);
    expect(euclideanAlgorithm(105, -147)).to.equal(21);
    expect(euclideanAlgorithm(-105, -147)).to.equal(21);
  });
})