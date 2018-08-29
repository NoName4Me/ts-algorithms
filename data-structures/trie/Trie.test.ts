import { expect } from 'chai';

import Trie from './Trie';

describe('Trie', () => {
  it('创建trie', () => {
    const trie = new Trie();

    expect(trie).not.undefined;
    expect(trie.head.toString()).to.equal('*');
  });

  it('加入单词', () => {
    const trie = new Trie();

    trie.addWord('cat');

    expect(trie.head.toString()).to.equal('*:c');
    expect(trie.head.getChild('c').toString()).to.equal('c:a');

    trie.addWord('car');
    expect(trie.head.toString()).to.equal('*:c');
    expect(trie.head.getChild('c').toString()).to.equal('c:a');
    expect(trie.head.getChild('c').getChild('a').toString()).to.equal('a:t,r');
    expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).to.equal('t*');
  });

  it('删除单词', () => {
    const trie = new Trie();

    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('cat');
    trie.addWord('cart');
    expect(trie.doesWordExist('carpet')).to.equal(true);
    expect(trie.doesWordExist('car')).to.equal(true);
    expect(trie.doesWordExist('cart')).to.equal(true);
    expect(trie.doesWordExist('cat')).to.equal(true);

    // Try to delete not-existing word first.
    trie.deleteWord('carpool');
    expect(trie.doesWordExist('carpet')).to.equal(true);
    expect(trie.doesWordExist('car')).to.equal(true);
    expect(trie.doesWordExist('cart')).to.equal(true);
    expect(trie.doesWordExist('cat')).to.equal(true);

    trie.deleteWord('carpet');
    expect(trie.doesWordExist('carpet')).to.false;
    expect(trie.doesWordExist('car')).to.true;
    expect(trie.doesWordExist('cart')).to.equal(true);
    expect(trie.doesWordExist('cat')).to.equal(true);

    trie.deleteWord('cat');
    expect(trie.doesWordExist('car')).to.true;
    expect(trie.doesWordExist('cart')).to.equal(true);
    expect(trie.doesWordExist('cat')).to.equal(false);

    trie.deleteWord('car');
    expect(trie.doesWordExist('car')).to.false;
    expect(trie.doesWordExist('cart')).to.equal(true);

    trie.deleteWord('cart');
    expect(trie.doesWordExist('car')).to.false;
    expect(trie.doesWordExist('cart')).to.equal(false);
  });

  it('获取下个字符建议', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.suggestNextCharacters('ca')).deep.equal(['t', 'r', 'p']);
    expect(trie.suggestNextCharacters('cat')).deep.equal(['s']);
    expect(trie.suggestNextCharacters('cab')).to.null;
  });

  it('单词是否存在', () => {
    const trie = new Trie();

    trie.addWord('cat');
    trie.addWord('cats');
    trie.addWord('carpet');
    trie.addWord('car');
    trie.addWord('caption');

    expect(trie.doesWordExist('cat')).to.equal(true);
    expect(trie.doesWordExist('cats')).to.equal(true);
    expect(trie.doesWordExist('carpet')).to.equal(true);
    expect(trie.doesWordExist('car')).to.equal(true);
    expect(trie.doesWordExist('cap')).to.equal(false);
    expect(trie.doesWordExist('call')).to.equal(false);
  });
});