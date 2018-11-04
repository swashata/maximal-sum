const arrSum = arr => arr.reduce((acc, cur) => acc + cur);

/**
 * Calculate sum of contiguous subarray of an array
 * where the subarray produces maximum possible sum.
 *
 * It uses bruteforce technique to consider the sum
 * of all possible arrays. It has the worst performance.
 *
 * @param {number[]} arr Array of numbers.
 * @return {number} Maximum possible sum of all contiguous array.
 */
exports.getMaxSubSumBrute = arr => {
	let sum = 0;
	const count = arr.length;
	arr.forEach((val, index) => {
		for (let i = count; i > index; i--) {
			sum = Math.max(sum, arrSum(arr.slice(index, i)));
		}
	});
	return sum;
};

/**
 * Calculate sum of contiguous subarray of an array
 * where the subarray produces maximum possible sum.
 *
 * It loops over the array once to find the value and
 * thereby produces the result with best performance.
 *
 * @param {number[]} arr Array of numbers.
 * @return {number} Maximum possible sum of all contiguous array.
 */
exports.getMaxSubSum = arr => {
	let current = 0;
	let max = 0;

	arr.forEach(val => {
		current = Math.max(0, current + val);
		max = Math.max(current, max);
	});

	return max;
};
