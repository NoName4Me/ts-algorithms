import {expect} from 'chai'
import HashTable from './HashTable'

describe('哈希表测试', ()=>{
  it('初始化', ()=>{
    let hashTable = new HashTable();
    expect(hashTable.buckets.length).to.equal(32);

    hashTable = new HashTable(15);
    expect(hashTable.buckets.length).to.equal(15);
  })

  it('哈希值', () => {
    let hashTable = new HashTable();
    expect(hashTable.buckets.length).to.equal(32);
    expect(hashTable.hash('a')).to.equal(1);
    expect(hashTable.hash('b')).to.equal(2);
    expect(hashTable.hash('abc')).to.equal(6);
  })
})