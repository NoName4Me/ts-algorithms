# ts-algorithms
[javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) 项目学习，顺带练习TS。

```shell
npm i typescript mocha @types/mocha chai @types/chai  ts-node -D
```

## 时间复杂度

> 含义: 算法执行时间与数据规模之间的增长关系
> 三个原则：
> * 只关注循环执行次数最多的一段代码
> * 加法法则: 总复杂度等于量级最大的那段代码的复杂度，如果 `T1(n)=O(f(n))`，`T2(n)=O(g(n))`，`T(n)=T1(n)+T2(n)=max(O(f(n)), O(g(n)))`
> * 乘法法则: 嵌套代码的复杂度等于嵌套内外代码复杂度的乘积，`T(n)=T1(n)*T2(n)=O(f(n))*O(g(n))=O(f(n)*g(n))`

### 常量阶 O(1)

```js
let i = 8
let j = 6
let sum = i +j
```

上述代码时间复杂度依然是 O(1)，而不是 O(3)，它只是一种表示方法，并不指执行了一行代码。

### O(logn)、O(nlogn)

```js
let i = 1
while(i <= n) {
  i = i * C // C
}
```

### O(m+n)、O(M*n)

```js
// m+n
function cal(m, n) {
  let sum1 = 0, sum2 = 0

  for(let i = 0; i < m; i++) {
    sum_1 += i
  }

  for(let i = 0; i < n; i++) {
    sum_2 += i
  }
  return sum1 + sum2
}
```

## 空间复杂度

同时间复杂度，只需关注与数据规模 n 有关的空间存储即可。

## 最好、最坏、平均、均摊

```js
function find(arr, val) {
  let foundIdx = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      foundIdx = i
    }
  }
  return foundIdx
}
```

假设数组长度为 n，上面的例子时间复杂度是 O(n)，稍微优化一下代码:

```js
function find(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i
    }
  }
  return -1
}
```

**最好**的情况是第1个元素就是要找的，复杂度是 O(1)，**最坏**情况是最后一个元素是要找的，复杂度为 O(n)。那么每个位置的概率为 `1/n`，那么**平均**时间复杂度为`(1+2+3+...+n)/n=(n+1)/2`，依然是O(n)。然而，考虑到可能要查找的值不存在，那么概率则为 1/2，任意位置概率为 `1/2n`，加权求和 `1/2n+2/2n+3/2n+...+n/2n=(n+1)/4`，仍然是O(n)。



----

## 参考

1. 极客时间专栏: https://time.geekbang.org/column/article/40036