import { expect } from 'chai';
import trialDivision from './trialDivision';

describe('primality test', () => {
  it('', () => {
    expect(trialDivision(-1)).to.be.false;

    expect(trialDivision(0)).to.be.false;
    expect(trialDivision(1)).to.be.false;
    expect(trialDivision(3.1)).to.be.false;
    expect(trialDivision(2)).to.be.true;
    expect(trialDivision(3)).to.be.true;
    expect(trialDivision(4)).to.be.false;
    expect(trialDivision(5)).to.be.true;
    expect(trialDivision(113)).to.be.true;
  })
})