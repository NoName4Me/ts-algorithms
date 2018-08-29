import BinarySearchTreeNode from './BinarySearchTreeNode';
import { expect } from 'chai';

describe('BinarySearchTreeNode', () => {
  /*
  it('should create binary search tree', () => {
    const bstNode = new BinarySearchTreeNode<number>(2);

    expect(bstNode.value).to.equal(2);
    expect(bstNode.left).to.be.null;
    expect(bstNode.right).to.be.null;
  });

  it('should insert in itself if it is empty', () => {
    const bstNode = new BinarySearchTreeNode<number>();
    bstNode.insert(1);

    expect(bstNode.value).to.equal(1);
    expect(bstNode.left).to.be.null;
    expect(bstNode.right).to.be.null;
  });

  it('should insert nodes in correct order', () => {
    const bstNode = new BinarySearchTreeNode<number>(2);
    const insertedNode1 = bstNode.insert(1);

    expect(insertedNode1.value).to.equal(1);
    expect(bstNode.toString()).to.equal('1,2');
    expect(bstNode.contains(1)).to.be.true;
    expect(bstNode.contains(3)).to.be.false;

    const insertedNode2 = bstNode.insert(3);

    expect(insertedNode2.value).to.equal(3);
    expect(bstNode.toString()).to.equal('1,2,3');
    expect(bstNode.contains(3)).to.be.true;
    expect(bstNode.contains(4)).to.equal(false);

    bstNode.insert(7);

    expect(bstNode.toString()).to.equal('1,2,3,7');
    expect(bstNode.contains(7)).to.equal(true);
    expect(bstNode.contains(8)).to.equal(false);

    bstNode.insert(4);

    expect(bstNode.toString()).to.equal('1,2,3,4,7');
    expect(bstNode.contains(4)).to.equal(true);
    expect(bstNode.contains(8)).to.equal(false);

    bstNode.insert(6);

    expect(bstNode.toString()).to.equal('1,2,3,4,6,7');
    expect(bstNode.contains(6)).to.equal(true);
    expect(bstNode.contains(8)).to.equal(false);

  });

  it('should not insert duplicates', () => {
    const bstNode = new BinarySearchTreeNode<number>(2);
    bstNode.insert(1);

    expect(bstNode.toString()).to.equal('1,2');
    expect(bstNode.contains(1)).to.equal(true);
    expect(bstNode.contains(3)).to.equal(false);

    bstNode.insert(1);

    expect(bstNode.toString()).to.equal('1,2');
    expect(bstNode.contains(1)).to.equal(true);
    expect(bstNode.contains(3)).to.equal(false);
  });

  it('should find min node', () => {
    const node = new BinarySearchTreeNode<number>(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin()).not.to.be.null;
    expect(node.findMin().value).to.equal(1);
  });

  it('should be possible to attach meta information to binary search tree nodes', () => {
    const node = new BinarySearchTreeNode<number>(10);

    node.insert(20);
    const node1 = node.insert(30);
    node.insert(5);
    node.insert(40);
    const node2 = node.insert(1);

    node.meta.set('color', 'red');
    node1.meta.set('color', 'black');
    node2.meta.set('color', 'white');

    expect(node.meta.get('color')).to.equal('red');

    expect(node.findMin()).not.to.be.null;
    expect(node.findMin().value).to.equal(1);
    expect(node.findMin().meta.get('color')).to.equal('white');
    expect(node.find(30).meta.get('color')).to.equal('black');
  });

  it('should find node', () => {
    const node = new BinarySearchTreeNode<number>(10);

    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6)).to.be.null;
    expect(node.find(5)).not.to.be.null;
    expect(node.find(5).value).to.equal(5);
  });

  it('should remove leaf nodes', () => {
    const bstRootNode = new BinarySearchTreeNode<number>();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);

    expect(bstRootNode.toString()).to.equal('5,10,20');

    const removed1 = bstRootNode.remove(5);
    expect(bstRootNode.toString()).to.equal('10,20');
    expect(removed1).to.equal(true);

    const removed2 = bstRootNode.remove(20);
    expect(bstRootNode.toString()).to.equal('10');
    expect(removed2).to.equal(true);
  });

  it('should remove nodes with one child', () => {
    const bstRootNode = new BinarySearchTreeNode<number>();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);

    expect(bstRootNode.toString()).to.equal('5,10,20,30');

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).to.equal('5,10,30');

    bstRootNode.insert(1);
    expect(bstRootNode.toString()).to.equal('1,5,10,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).to.equal('1,10,30');
  });

  it('should remove nodes with two children', () => {
    const bstRootNode = new BinarySearchTreeNode<number>();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);
    bstRootNode.insert(15);
    bstRootNode.insert(25);

    expect(bstRootNode.toString()).to.equal('5,10,15,20,25,30');
    expect(bstRootNode.find(20).left.value).to.equal(15);
    expect(bstRootNode.find(20).right.value).to.equal(30);

    bstRootNode.remove(20);
    expect(bstRootNode.toString()).to.equal('5,10,15,25,30');

    bstRootNode.remove(15);
    expect(bstRootNode.toString()).to.equal('5,10,25,30');

    bstRootNode.remove(10);
    expect(bstRootNode.toString()).to.equal('5,25,30');
    expect(bstRootNode.value).to.equal(25);

    bstRootNode.remove(25);
    expect(bstRootNode.toString()).to.equal('5,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString()).to.equal('30');
  });

  it('should remove node with no parent', () => {
    const bstRootNode = new BinarySearchTreeNode<number>();
    expect(bstRootNode.toString()).to.equal('');

    bstRootNode.insert(1);
    bstRootNode.insert(2);
    expect(bstRootNode.toString()).to.equal('1,2');

    bstRootNode.remove(1);
    expect(bstRootNode.toString()).to.equal('2');

    bstRootNode.remove(2);
    expect(bstRootNode.toString()).to.equal('');
  });

  it('should throw error when trying to remove not existing node', () => {
    const bstRootNode = new BinarySearchTreeNode<number>();

    bstRootNode.insert(10);
    bstRootNode.insert(20);

    function removeNotExistingElementFromTree() {
      bstRootNode.remove(30);
    }

    expect(removeNotExistingElementFromTree).to.throw;
  });

  it('should be possible to use objects as node values', () => {
    const nodeValueComparatorCallback = (a, b) => {
      const normalizedA = a || { value: null };
      const normalizedB = b || { value: null };

      if (normalizedA.value === normalizedB.value) {
        return 0;
      }

      return normalizedA.value < normalizedB.value ? -1 : 1;
    };

    const obj1 = { key: 'obj1', value: 1, toString: () => 'obj1' };
    const obj2 = { key: 'obj2', value: 2, toString: () => 'obj2' };
    const obj3 = { key: 'obj3', value: 3, toString: () => 'obj3' };

    const bstNode = new BinarySearchTreeNode(obj2, nodeValueComparatorCallback);
    bstNode.insert(obj1);

    expect(bstNode.toString()).to.equal('obj1,obj2');
    expect(bstNode.contains(obj1)).to.equal(true);
    expect(bstNode.contains(obj3)).to.equal(false);

    bstNode.insert(obj3);

    expect(bstNode.toString()).to.equal('obj1,obj2,obj3');
    expect(bstNode.contains(obj3)).to.equal(true);

    expect(bstNode.findMin().value).deep.equal(obj1);
  });
*/
  it('should abandon removed node', () => {
    const rootNode = new BinarySearchTreeNode<string>('foo');
    rootNode.insert('bar');
    console.log(rootNode.toString())
    
    const childNode = rootNode.find('bar');
    console.log(childNode.value);
    rootNode.remove('bar');

    expect(childNode.parent).to.be.null;
  });
});