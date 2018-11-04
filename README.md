# Maximal sum of contiguous subarray of an array

It provides two functions to get the job done. Both of them calculate sum of contiguous subarray of an array where the subarray produces maximum possible sum.

For example

```js
expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
expect(getMaxSubSum([1, 2, 3])).toBe(6);
```

## Install

```
npm i maximal-sum
```

## `getMaxSubSum`

```js
const { getMaxSubSum } = require('maximal-sum');
const sum = getMaxSubSum([2, -1, 2, 3, -9]);
// > 6
// The subarray is [2, -1, 2, 3]
```

Use this method to have `O(n)` complexity. The concept is simple:

1. Let maximum sum be `0`;
2. Let current sum be `0`;
3. Loop over all items of the array:
   a. add the item to `current`. If it becomes `< 0`, then override to `0`.
   b. `maximum` is the greatest between `maximum` and `current`.

It works because, we don't actually want to get the subarray itself. Just the
sum. Also when comparing `current` with `maximum`, if at some point, the sum
becomes greater, starting from an `index !== 0`, we override at `3.b`.

## `getMaxSubSumBrute`

Just for testing purpose. It produces the same result but has worst performance.
The reason is, it uses nested loops to brute-force all possible subarrays and
checks for the maximum of sums.

```js
const { getMaxSubSumBrute } = require('maximal-sum');
const sum = getMaxSubSumBrute([2, -1, 2, 3, -9]);
// > 6
// The subarray is [2, -1, 2, 3]
```
