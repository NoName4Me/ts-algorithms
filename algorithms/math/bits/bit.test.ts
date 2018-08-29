import { expect } from 'chai';
import getBit from './getBit';
import setBit from './setBit';
import clearBit from './clearBit';
import updateBit from './updateBit';
import isEven from './isEven';
import isPositive from './isPositive';
import multiplyByTwo from './multiplyByTwo';
import divideByTwo from './divideByTwo';
import multiply from './multiply';
import multiplyUnsigned from './multiplyUnsigned';
import countSetBits from './countSetBits';


describe('bit test', () => {
  it('get', () => {
    // 5: 101
    expect(getBit(5, 0)).to.equal(1);
    expect(getBit(5, 1)).to.equal(0);
    expect(getBit(5, 2)).to.equal(1);
    expect(getBit(5, 3)).to.equal(0);
  });

  it('set', () => {
    // 5: 101
    expect(setBit(5, 0)).to.equal(5);
    expect(setBit(5, 1)).to.equal(7);
    // expect(setBit(5, -1)).to.equal(Math.pow(2, 31) - 5);
    // 0: 0000,0000
    expect(setBit(0, 0)).to.equal(1);
    expect(setBit(0, 1)).to.equal(2);
    expect(setBit(0, 4)).to.equal(16);
  });

  it('clear', () => {
    // 11: 1011
    expect(clearBit(11, 3)).to.equal(3);
    expect(clearBit(11, 2)).to.equal(11);
    expect(clearBit(11, 1)).to.equal(9);
    expect(clearBit(11, 0)).to.equal(10);
  });

  it('update', () => {
    // 11: 1011
    expect(updateBit(11, 2, 0)).to.equal(11);
    expect(updateBit(11, 2, 1)).to.equal(15);
    expect(updateBit(11, 0, 0)).to.equal(10);
    expect(updateBit(11, 0, 1)).to.equal(11);
  });

  it('is even', () => {
    expect(isEven(3)).to.be.false;
    expect(isEven(-3)).to.be.false;
    expect(isEven(2)).to.be.true;
    expect(isEven(-2)).to.be.true;
    expect(isEven(0)).to.be.true;
    expect(isEven(-0)).to.be.true;
  });

  it('is positive', () => {
    expect(isPositive(3)).to.be.true;
    expect(isPositive(-3)).to.be.false;
    expect(isPositive(0)).to.be.false;
    expect(isPositive(-0)).to.be.false;
  });

  it('multiply / divide by 2', () => {
    expect(multiplyByTwo(3)).to.equal(6);
    expect(multiplyByTwo(-3)).to.equal(-6);
    expect(divideByTwo(3)).to.equal(1);
    expect(divideByTwo(-0)).to.equal(0);
  });

  it('multiply', () => {
    expect(multiply(0, 3)).to.equal(0);
    expect(multiply(2, 0)).to.equal(0);
    expect(multiply(0, 0)).to.equal(0);
    expect(multiply(2, 2)).to.equal(4);
    expect(multiply(3, 2)).to.equal(6);
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(2, -3)).to.equal(-6);
  });

  it('multiply unsigned', () => {
    expect(multiplyUnsigned(0, 3)).to.equal(0);
    expect(multiplyUnsigned(2, 3)).to.equal(6);
    expect(multiplyUnsigned(-2, 3)).to.equal(-6);
    expect(() => multiplyUnsigned(2, -3)).throw;
  });

  it('bit counter', () => {
    // expect(countSetBits(0)).to.equal(0);
    // expect(countSetBits(5)).to.equal(2);
    expect(countSetBits(-5)).to.equal(2);
  })
})