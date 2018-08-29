# 栈

如下图所示

![](https://camo.githubusercontent.com/464c4087d283619fe8e8c77cf5805e45faa54ca9/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62342f4c69666f5f737461636b2e706e67)

## 实例

### 函数调用

```js
function op(x, y) {
  let a = 2
  let result = a + add()
  return result
}

function add(x, y) {
  return x + y
}

```

### 浏览器前进后退

```js
X.push(a, b, c) // a->b->c
Y.push(X.pop(), X.pop()) // 后退两步
X.push(Y.pop()) // 前进一步
X.push(d), Y.empty() // 打开页面 d
```

### 表达式求值

```js
// 2 + 8 * 5 - 7，从左往右依次分开（数字和运算符）压栈，数字直接压栈，如果运算符优先级不高于栈顶运算符，运算符出一位，数字出两位，进行运算，结果压栈，依次类推。
N.push(2),O.push(+),N.push(8),O.push(*),N.push(5) // N:2,8,5  O:+,*
N.push(N.pop() O.pop() N.pop()) // 8*5=40 压栈, N:2,40  O:+
N.push(N.pop() O.pop() N.pop()) // 2+40=42 压栈 N:42  O:empty
O.push(-),N.push(7) // N:42,7  O:-
N.push(N.pop() O.pop() N.pop()) // 42-7=35, 最终结果
N.empty(),O.empty()
```

### 括号匹配

```js
// [{()}([])] 合法，{[}()] 非法
// 从左往右依次，遇到左括号压栈，遇到右括号从栈里出一位进行匹配，如果可以匹配，则继续进行
// 过程中若遇到无法匹配的右括号（包含栈已经空了的情况）或最终有剩余的左括号，则非法


```