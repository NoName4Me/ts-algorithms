export default class JumpListIndexNode<T> {
  data: T;
  next:

  constructor(data: T = null, indicesLayerSize: number = 16) {
    this.data = data;
    this.indices = new Array<JumpListIndexNode<T>>(indicesLayerSize).fill(new JumpListIndexNode<T>());
  }
}