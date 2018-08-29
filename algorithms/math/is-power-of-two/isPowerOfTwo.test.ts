import {expect} from 'chai';
import isPowerOfTwo from './isPowerOfTwo';
import isPowerOfTwoBitwise from './isPowerOfTwoBitwise';

describe('is power of two',()=>{
  it('iterative way', ()=>{
    expect(isPowerOfTwo(-2)).to.be.false;
    expect(isPowerOfTwo(-1)).to.be.false;
    expect(isPowerOfTwo(0)).to.be.false;
    expect(isPowerOfTwo(1)).to.be.true;
    expect(isPowerOfTwo(2)).to.be.true;
    expect(isPowerOfTwo(3)).to.be.false;
    expect(isPowerOfTwo(4)).to.be.true;
  });

  it('bit way', () => {
    expect(isPowerOfTwoBitwise(-2)).to.be.false;
    expect(isPowerOfTwoBitwise(-1)).to.be.false;
    expect(isPowerOfTwoBitwise(0)).to.be.false;
    expect(isPowerOfTwoBitwise(1)).to.be.true;
    expect(isPowerOfTwoBitwise(2)).to.be.true;
    expect(isPowerOfTwoBitwise(3)).to.be.false;
    expect(isPowerOfTwoBitwise(4)).to.be.true;
  })
})