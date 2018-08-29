# 基数排序

从低位，按位排序，使用稳定排序算法，示例：

```
a e i        c e b        h a e        a e i
g c d        g c d        g c d        c e b
h a e   -->  h a e  -->   c e b  -->   d i h
d i h        d i h        a e i        g c d
c e b        a e i        d i h        h a e
```

使用场景，比如单词、手机号排序。