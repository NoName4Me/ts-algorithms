# 组合（Combination）

![](../permutations/2018-11-22-08-58-57.png)

## combine with repetation

```js
options = { A, B, C }, comboLength = 2
STEP_1: 记录 A
STEP_2: 寻找所有小一阶排列 --> {A}, {B}, {C}
STEP_3: 组合 A 和 小一阶排列 --> {A,A},{A,B},{A,C}
STEP_4: 重复STEP_1~STEP_3，直到遍历完 options

结果: {A,A},{A,B},{A,C},{B,A},{B,B},{B,C},{C,A},{C,B},{C,C}
```

## combine without repetation

```js
options = { A, B, C }, comboLength = 2
STEP_1: 取出 A
STEP_2: 寻找所有小一阶排列 --> {B}, {C}
STEP_3: 组合 A 和 小一阶排列 --> {A,B}, {A,C}
STEP_4: 重复 STEP_1~STEP_3，直到遍历完 options

结果: {A,B,C}, {B,A,C}, {B,C,A}, {A,C,B}, {C,A,B}, {C,B,A}
```