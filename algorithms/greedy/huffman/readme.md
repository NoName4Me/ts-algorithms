# Huffman 编码

示例：

`"banana"` 创建编码树（根据频次排序，然后依次取最小频次生成树）

```js
b: 1
n: 2
a: 3

     bna(6)
     /   \
   bn(3) a(3)
  /   \
b(1) n(2)  // 从下往上生成

// 即

Node {
  value: 'bna',
  frequency: 6,
  left:
   Node {
     value: 'bn',
     frequency: 3,
     left: Node { value: 'b', frequency: 1, left: null, right: null },
     right: Node { value: 'n', frequency: 2, left: null, right: null } },
  right: Node { value: 'a', frequency: 3, left: null, right: null } }
```

编码字典：

a: 1
n: 01
b: 00

测试：

'aaaa' --> '1111'
