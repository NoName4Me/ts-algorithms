import { expect } from 'chai';
import Huffman from './Huffman';

describe('Huffman', () => {
  it('banana 编码测试', () => {
    const huffman = new Huffman('banana');
    expect(huffman.encode('abc')).to.equal('100*');
    expect(huffman.encode('aaaa')).to.equal('1111');
    expect(huffman.encode('d')).to.equal('*');
    expect(huffman.encode('nba')).to.equal('01001');
  });

  it('banana 解码测试', () => {
    const huffman = new Huffman('banana');
    huffman.printTree()
    expect(huffman.decode('1000')).to.equal('ab');
    expect(huffman.decode('1111')).to.equal('aaaa');
    expect(huffman.decode('00001')).to.equal('bba');
    expect(huffman.decode('000')).to.equal('b');
    expect(huffman.decode('01001')).to.equal('nba');
  });
});
