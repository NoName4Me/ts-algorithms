import { expect } from 'chai';
import ComplexNumber from './ComplexNumber';

describe('complex number', () => {
  it('should create complex number', () => {
    let cn: ComplexNumber = new ComplexNumber({ re: 1, im: 2 });
    expect(cn.re).to.equal(1);
    expect(cn.im).to.equal(2);
  });

  it('add test', () => {
    let cn1: ComplexNumber = new ComplexNumber({ re: 1, im: 2 });
    let cn2: ComplexNumber = cn1.add(2);
    expect(cn2.re).to.equal(3);
    expect(cn1.add(new ComplexNumber({ re: 3, im: -5 })).re).to.equal(4);
  });

  it('substract test', () => {
    let cn1: ComplexNumber = new ComplexNumber({ re: 1, im: 2 });
    let cn2: ComplexNumber = cn1.substract(2);
    expect(cn2.re).to.equal(-1);
    expect(cn1.substract(new ComplexNumber({ re: 3, im: -5 })).im).to.equal(7);
  });

  it('multiple test', () => {
    let cn1: ComplexNumber = new ComplexNumber({ re: 1, im: 2 });
    let cn2: ComplexNumber = cn1.multiply(2);
    expect(cn2.re).to.equal(2);
    expect(cn1.multiply(new ComplexNumber({ re: 3, im: -5 })).re).to.equal(13);
  })
  it('divide test', () => {
    let cn1: ComplexNumber = new ComplexNumber({ re: 1, im: 2 });
    let cn2: ComplexNumber = cn1.divide(2);
    expect(cn2.im).to.equal(1);
    expect(cn2.re).to.equal(0.5);
    let cn3: ComplexNumber = cn1.divide(new ComplexNumber({ re: 2, im: -1 }));
    expect(cn3.im).to.equal(1);
    expect(cn3.re).to.equal(0);
  })
})