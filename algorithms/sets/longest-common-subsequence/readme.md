# Longest Common Subsequence(最长公共子序列)

公式：

![](2018-11-23-15-53-33.png)

## example

`LCS(AGCAT, GAC)`

先标识，再反向跟踪。

结果1：`GA`

| |0|A|G|C|A|T|
|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|
|G|0|0|**`1`**|`1`|1|1|
|A|0|1|1|1|**`2`**|`2`|
|C|0|1|1|2|2|`2`|


结果2：`AC`

| |0|A|G|C|A|T|
|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|
|G|0|0|1|1|1|1|
|A|0|**`1`**|`1`|1|2|2|
|C|0|1|1|**`2`**|`2`|`2`|


结果3：`GC`

| |0|A|G|C|A|T|
|-|-|-|-|-|-|-|
|0|0|0|0|0|0|0|
|G|0|0|**`1`**|1|1|1|
|A|0|1|`1`|1|2|2|
|C|0|1|1|**`2`**|`2`|`2`|