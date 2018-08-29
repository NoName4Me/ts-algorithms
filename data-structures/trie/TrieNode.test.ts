import { expect } from 'chai';
import TrieNode from './TrieNode';

describe('字典树节点测试', () => {
  it('初始化', () => {
    let trieNode: TrieNode = new TrieNode('c', true);
    expect(trieNode.character).to.equal('c');
    expect(trieNode.isCompleteWord).to.true;
    expect(trieNode.toString()).to.equal('c*');
  });

  it('增加子节点', () => {
    let trieNode: TrieNode = new TrieNode('c', true);
    trieNode.addChild('a', true);
    trieNode.addChild('o');
    expect(trieNode.toString()).to.equal('c*:a,o');
  });

  it('获取子节点', () => {
    let trieNode: TrieNode = new TrieNode('c');
    trieNode.addChild('a', true);
    trieNode.addChild('o');
    expect(trieNode.getChild('a').toString()).to.equal('a*');
    expect(trieNode.getChild('a').character).to.equal('a');
    expect(trieNode.getChild('o').toString()).to.equal('o');
    expect(trieNode.getChild('b')).to.undefined;
  });

  it('子节点是否存在', () => {
    let trieNode: TrieNode = new TrieNode('c');
    expect(trieNode.hasChildren()).to.false;
    trieNode.addChild('o');
    expect(trieNode.hasChildren()).to.true;
    expect(trieNode.hasChild('a')).to.false;
    expect(trieNode.hasChild('o')).to.true;
  });

  it('获取建议节点', () => {
    let trieNode: TrieNode = new TrieNode('h');
    expect(trieNode.hasChildren()).to.false;
    trieNode.addChild('e', true);
    trieNode.addChild('i');
    trieNode.getChild('i').addChild('s', true);
    expect(trieNode.suggestChildren()).deep.equal(['e', 'i']);
  });

  it('只能删除无子节点且不是完整词的节点', () => {
    let trieNode: TrieNode = new TrieNode('h');
    expect(trieNode.hasChildren()).to.false;
    trieNode.addChild('e', true);
    trieNode.addChild('i');
    trieNode.addChild('o');
    trieNode.getChild('i').addChild('s', true);
    trieNode.removeChild('e'); // not deleted
    expect(trieNode.hasChild('e')).to.true;

    trieNode.removeChild('i'); // not deleted
    expect(trieNode.hasChild('i')).to.true;

    expect(trieNode.hasChild('o')).to.true;
    trieNode.removeChild('o'); // not deleted
    expect(trieNode.hasChild('o')).to.false;

    expect(trieNode.toString()).to.equal('h:e,i');
  });
});
