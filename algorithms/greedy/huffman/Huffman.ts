type Dict = { key: string, code: string };

export default class Huffman {
  dictionary: Dict = {} as Dict;
  raw: string;
  rootNode: Node;

  constructor(raw: string) {
    if (!raw) {
      throw Error('raw string cannot be empty');
    }

    this.raw = raw;

    const charMap = {};
    for (let i = 0; i < raw.length; i++) {
      let charVal = raw.charAt(i);
      if (!charMap[charVal]) {
        charMap[charVal] = 0;
      }
      charMap[charVal]++;
    }

    // statistics
    const nodeList = Object.keys(charMap).map(key => {
      return new Node(key, charMap[key]);
    }).sort((a, b) => a.frequency - b.frequency);

    // create tree
    let root: Node = nodeList[0];
    for (let i = 1; i < nodeList.length; i++) {
      let node = nodeList[i];
      root = new Node(root.value + node.value, root.frequency + node.frequency, root, node);
    }
    this.rootNode = root;

    // create code dictionary
    const traverse = (key, node) => {
      if (node.right && node.right.value === key) {
        return '1';
      }

      if (node.left) {
        return '0' + traverse(key, node.left);
      }

      return '';
    }

    Object.keys(charMap).map(key => {
      this.dictionary[key] = traverse(key, this.rootNode);
    });
  }

  encode(input: string): string {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      result += this.dictionary[input.charAt(i)] || '*';
    }
    return result;
  }

  printTree() {
    console.log(this.rootNode);
  }

  decode(input: string): string {
    let currentNode = this.rootNode;
    let result = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '0') {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (!currentNode.left && !currentNode.right) {
        result += currentNode.value;
        // go back to root for next
        currentNode = this.rootNode;
      }
    }
    return result;
  }
}

class Node {
  value: string;
  frequency: number;
  left: Node;
  right: Node;
  constructor(value: string, frequency: number, left: Node = null, right: Node = null) {
    this.value = value;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}