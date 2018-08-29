import { expect } from 'chai';
import LRU from './LRU';

describe('LRU 淘汰算法', () => {
  it('访问一次就放到头部', () => {
    const lru = new LRU(4);
    
    expect(lru.capacity).to.equal(4);
    expect(lru.get('a')).to.undefined;
    expect(lru.set('a', 'aaa')).to.equal(1);
    expect(lru.set('b', 'bbb')).to.equal(2);
    expect(lru.set('c', 'ccc')).to.equal(3);
    expect(lru.list.tail.value.key).to.equal('a');
    expect(lru.get('a')).to.equal('aaa');
    expect(lru.list.head.value.key).to.equal('a');
    expect(lru.list.tail.value.key).to.equal('b');
    expect(lru.get('d')).to.undefined;
    
  });

  it('如果缓存已满，则删除最末尾', () => {
    const lru = new LRU(3);
    lru.set('a', 'aaa');
    lru.set('b', 'bbb');
    lru.set('c', 'ccc');
    lru.set('d', 'ddd');
    expect(lru.list.head.value.key).to.equal('d');
    expect(lru.list.tail.value.key).to.equal('b');
  });
});