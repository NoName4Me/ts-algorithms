import { expect } from 'chai';
import { hasHighPriority, arithmetic, doCalc } from './arithmetic';

describe('工具方法测试', () => {
  it('运算符优先级判断', () => {
    expect(hasHighPriority('*', '+')).equal(true);
    expect(hasHighPriority('*', '-')).equal(true);
    expect(hasHighPriority('/', '+')).equal(true);
    expect(hasHighPriority('/', '-')).equal(true);

    expect(hasHighPriority('*', '/')).equal(false);
    expect(hasHighPriority('/', '*')).equal(false);

    expect(hasHighPriority('+', '*')).equal(false);
    expect(hasHighPriority('-', '*')).equal(false);
  })


  it('两数运算', () => {
    expect(doCalc(2, 5, '+')).equal(7);
    expect(doCalc(2, 5, '-')).equal(-3);
    expect(doCalc(2, 5, '*')).equal(10);
    expect(doCalc(2, 5, '/')).equal(0.4);
  })
})

describe('四则运算', () => {
  it('运算符优先级判断', () => {
    expect(arithmetic('1 + 2')).equal(3);
    expect(arithmetic('1 + 2 * 2')).equal(5);
    expect(arithmetic('1 + 2 * 3 - 11')).equal(-4);
    expect(arithmetic('1 + 2 * 3 - 18 / 2')).equal(-2);
  })
})