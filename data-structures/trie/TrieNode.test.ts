import { expect } from 'chai'
import TrieNode from './TrieNode'

describe('字典树测试', function () {
  it('初始化', function () {
    let trieNode: TrieNode = new TrieNode('dog',true);
    expect(trieNode.character).to.equal('dog');
    expect(trieNode.isCompleteWord).to.be.true;
    // expect(trieNode.suggestChildren()).deep.equal(['dog']);
    expect(trieNode.toString()).to.equal('dog*');
  })
})