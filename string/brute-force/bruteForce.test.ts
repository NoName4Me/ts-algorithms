import {expect} from 'chai';
import bruteForce from './bruteForce';

describe('Brute Force sub-string search',()=>{
  it('should find substring in a string', () => {
    expect(bruteForce('', '')).to.equal(0);
    expect(bruteForce('a', '')).to.equal(0);
    expect(bruteForce('a', 'a')).to.equal(0);
    expect(bruteForce('ab', 'b')).to.equal(1);
    expect(bruteForce('abcbcglx', 'abca')).to.equal(-1);
    expect(bruteForce('abcbcglx', 'bcgl')).to.equal(3);
    expect(bruteForce('abcxabcdabxabcdabcdabcy', 'abcdabcy')).to.equal(15);
    expect(bruteForce('abcxabcdabxabcdabcdabcy', 'abcdabca')).to.equal(-1);
    expect(bruteForce('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).to.equal(12);
    expect(bruteForce('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).to.equal(11);
    expect(bruteForce('^ !/\'#\'pp', ' !/\'#\'pp')).to.equal(1);
  });

  it('should work with bigger texts', () => {
    const text = 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s standard '
      + 'dummy text ever since the 1500s, when an unknown printer took a '
      + 'galley of type and scrambled it to make a type specimen book. It '
      + 'has survived not only five centuries, but also the leap into '
      + 'electronic typesetting, remaining essentially unchanged. It was '
      + 'popularised in the 1960s with the release of Letraset sheets '
      + 'containing Lorem Ipsum passages, and more recently with desktop'
      + 'publishing software like Aldus PageMaker including versions of Lorem '
      + 'Ipsum.';

    expect(bruteForce(text, 'Lorem')).to.equal(0);
    expect(bruteForce(text, 'versions')).to.equal(549);
    expect(bruteForce(text, 'versions of Lorem Ipsum.')).to.equal(549);
    expect(bruteForce(text, 'versions of Lorem Ipsum:')).to.equal(-1);
    expect(bruteForce(text, 'Lorem Ipsum passages, and more recently with')).to.equal(446);
  });

  it('should work with UTF symbols', () => {
    expect(bruteForce('a\u{ffff}', '\u{ffff}')).to.equal(1);
    expect(bruteForce('\u0000耀\u0000', '耀\u0000')).to.equal(1);
    expect(bruteForce('你好啊', '好')).to.equal(1);
  });
})