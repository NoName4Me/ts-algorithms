# 插入排序

插入排序的思路是将待排序数据分为已排序和未排序部分，不断的从未排序部分依次取数据插入到已排序部分的合理位置。

它之所以比冒泡排序更常见，是后者在元素交换时，需要 3 个赋值操作，而插入排序只需要 1 个。

----

时间复杂度|空间复杂度|是否稳定|最好时间复杂度|最坏情况时间复杂度
--|--|--|--|--
`O(n^2)`|`O(1)`|Y|`O(n)`|`O(n^2)`

----


![Animated GIF of the Insertion Sort](https://en.wikipedia.org/wiki/File:Insertion_sort.gif)

![A graphical example of insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)