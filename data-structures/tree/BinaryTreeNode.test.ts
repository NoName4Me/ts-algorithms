import { expect } from 'chai';
import BinaryTreeNode from './BinaryTreeNode';

describe('binary tree node', ()=> {
  it('should create node', ()=>{
    const node = new BinaryTreeNode<number>();

    expect(node).to.not.undefined;
    expect(node.left).to.be.null;
    expect(node.right).to.be.null;
    expect(node.parent).to.be.null;

    const leftNode = new BinaryTreeNode<number>(1);
    const rightNode = new BinaryTreeNode<number>(3);
    const rootNode = new BinaryTreeNode<number>(2);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.value).to.equal(2);
    expect(rootNode.left.value).to.equal(1);
    expect(rootNode.right.value).to.equal(3);
    expect(rootNode.right.parent.value).to.equal(2);
    expect(rootNode.right.parent.left.value).to.equal(1);

  });
});