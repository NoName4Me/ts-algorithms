import HashTable from '../hash-table/HashTable'

export default class TrieNode {
  children: HashTable<TrieNode>;
  isCompleteWord: boolean;
  character: string;

  constructor(character: string, isCompleteWord = false) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable<TrieNode>();
  }

  getChild(character: string) {
    return this.children.get(character);
  }

  addChild(character: string, isCompleteWord: boolean = false): any {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord));
    }
    const childNode = this.children.get(character);
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;
    return childNode;
  }

  removeChild(character: string): TrieNode {
    const childNode = this.getChild(character);

    // 删除满足下面条件的`childNode`
    // - `childNode`没有子
    // - `childNode.isCompleteWord === false`
    if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
      this.children.delete(character);
    }
    return this;
  }

  hasChild(character: string): boolean {
    return this.children.has(character);
  }

  hasChildren() {
    return this.children.getKeys().length !== 0;
  }

  suggestChildren() {
    return [...this.children.getKeys()];
  }

  toString(): string {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';
    return `${this.character}${isCompleteString}${childrenAsString}`
  }
}