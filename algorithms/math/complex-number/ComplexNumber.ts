export default class ComplexNumber {
  re: number;
  im: number;
  constructor({ re = 0, im = 0 } = {}) {
    this.re = re;
    this.im = im;
  }

  add(addend: number | ComplexNumber): ComplexNumber {
    const normilizedAddend: ComplexNumber = this.toComplexNumber(addend);
    return new ComplexNumber({
      re: normilizedAddend.re + this.re,
      im: normilizedAddend.im + this.im
    });
  }

  substract(subtrahend: number | ComplexNumber): ComplexNumber {
    const normilizedSubtrahend: ComplexNumber = this.toComplexNumber(subtrahend);
    return new ComplexNumber({
      re: this.re - normilizedSubtrahend.re,
      im: this.im - normilizedSubtrahend.im
    });
  }

  multiply(multiplicand: number | ComplexNumber): ComplexNumber {
    const normilizedMultiplicand: ComplexNumber = this.toComplexNumber(multiplicand);
    return new ComplexNumber({
      re: this.re * normilizedMultiplicand.re - this.im * normilizedMultiplicand.im,
      im: this.re * normilizedMultiplicand.im + this.im * normilizedMultiplicand.re
    });
  }

  divide(dividend: number | ComplexNumber): ComplexNumber {
    const normilizedDivider: ComplexNumber = this.toComplexNumber(dividend);
    const dividendConjugate: ComplexNumber = this.conjugate(normilizedDivider);
    const finalDividen:ComplexNumber = this.multiply(dividendConjugate);
    const finalDivider = dividendConjugate.re ** 2 + dividendConjugate.im ** 2;
    return new ComplexNumber({
      re: finalDividen.re  / finalDivider,
      im: finalDividen.im / finalDivider
    });
  }

  conjugate(n: number | ComplexNumber): ComplexNumber {
    const complexNumber = this.toComplexNumber(n);
    return new ComplexNumber({
      re: complexNumber.re,
      im: -complexNumber.im
    });
  }

  toComplexNumber(n: number | ComplexNumber): ComplexNumber {
    if (n instanceof ComplexNumber) {
      return n;
    } else {
      return new ComplexNumber({ re: n });
    }
  }
}