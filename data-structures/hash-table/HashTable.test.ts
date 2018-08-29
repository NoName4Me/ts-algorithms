import {expect} from 'chai'
import HashTable from './HashTable'

describe('哈希表测试', ()=>{
  it('初始化', ()=>{
    let hashTable = new HashTable<string>();
    expect(hashTable.buckets.length).to.equal(32);

    hashTable = new HashTable(15);
    expect(hashTable.buckets.length).to.equal(15);
  })

  it('哈希值', () => {
    let hashTable = new HashTable<string>();
    expect(hashTable.buckets.length).to.equal(32);
    expect(hashTable.hash('a')).to.equal(1);
    expect(hashTable.hash('b')).to.equal(2);
    expect(hashTable.hash('abc')).to.equal(6);
  });

  it('散列冲突', () => {
    let hashTable = new HashTable<string>(3);
    expect(hashTable.buckets.length).to.equal(3);
    expect(hashTable.hash('a')).to.equal(1);
    expect(hashTable.hash('b')).to.equal(2);
    expect(hashTable.hash('c')).to.equal(0);
    expect(hashTable.hash('d')).to.equal(1);

    hashTable.set('a', 'dog');
    hashTable.set('a', 'cat');
    hashTable.set('b', 'cow');
    hashTable.set('c', 'snake');
    hashTable.set('d', 'sheep');

    const stringifier = value => `${value.key}:${value.value}`;

    expect(hashTable.buckets[0].toString(stringifier)).to.equal('c:snake');
    expect(hashTable.buckets[1].toString(stringifier)).to.equal('a:cat,d:sheep');
    expect(hashTable.buckets[2].toString(stringifier)).to.equal('b:cow');

    hashTable.delete('a');
    expect(hashTable.has('a')).to.be.false;
    expect(hashTable.get('a')).to.be.undefined;
  })
})