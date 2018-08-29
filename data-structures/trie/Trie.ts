import TrieNode from './TrieNode';

const HEAD_CHARACTER = '*';

export default class Trie {
  head: TrieNode;

  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  addWord(word: string): Trie {
    const characters: string[] = Array.from(word);
    let currentNode: TrieNode = this.head;

    for (let charIdx = 0; charIdx < characters.length; charIdx += 1) {
      const isCompleteWord = charIdx === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIdx], isCompleteWord);
    }
    return this;
  }

  deleteWord(word: string): Trie {
    const depthFirstDelete = (currentNode: TrieNode, charIdx = 0) => {
      if (charIdx >= word.length) {
        // 删除的字符超过了单词范围
        return;
      }

      const character = word[charIdx];
      const nextNode = currentNode.getChild(character);

      if (nextNode == null) {
        // Trie 里还没有该词
        return;
      }

      depthFirstDelete(nextNode, charIdx + 1);

      if (charIdx === (word.length - 1)) {
        nextNode.isCompleteWord = false;
      }

      currentNode.removeChild(character);
    };

    depthFirstDelete(this.head);

    return this;
  }

  suggestNextCharacters(word: string): string[] {
    const lastCharacter = this.getLastCharacterNode(word);
    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  doesWordExist(word: string): boolean {
    const lastCharacter = this.getLastCharacterNode(word);
    return !!lastCharacter && lastCharacter.isCompleteWord;
  }

  getLastCharacterNode(word: string): TrieNode {
    const characters: string[] = Array.from(word);
    let currentNode = this.head;
    for (let charIdx = 0; charIdx < characters.length; charIdx += 1) {
      if (!currentNode.hasChild(characters[charIdx])) {
        return null;
      }
      currentNode = currentNode.getChild(characters[charIdx]);
    }
    return currentNode;
  }
}