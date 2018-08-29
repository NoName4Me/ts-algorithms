import { expect } from 'chai';
import LinkedListNode from './LinkedListNode';

describe('测试 math', function () {

  it('add()', function () {
    let node = new LinkedListNode('hello')
    expect(node.value).to.equal('hello');
    console.log(node.toString())
  });

});