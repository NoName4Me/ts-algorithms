# Euclidean Algorithm - Greatest Common Divisor (GCD)

求两个数的 GCD（最大公约数），根据一个原则，最大公约数也是两数差的约数，比如：

```
105 和 147 的公约数是 21，21 也是两数的差 42 的约数，因此可以按照这种做差来减少计算步骤

每一步比较 input1 和 input2
step0: input(105, 147)
step1: 147 - 105 = 42, input(105, 42)
step2: 105 - 42 = 63, input(63, 42)
step3: 63 - 42 = 21, input(42, 21)
step4: 42 - 21 = 21, input(21, 21)
step5: output(21)
```

优化一下，可以使用模计算来替代「比较 & 做差」：

```
每一步判断 input1 % input2 === 0
step0: input(105, 147)
step1: 105 % 147 = 105, input(147, 105)
step2: 147 % 105 = 42, input(105, 42)
step3: 105 % 42 = 21, input(42, 21)
step4: output(21)
```