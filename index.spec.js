const { getMaxSubSum, getMaxSubSumBrute } = require('./index');

describe('getMaxSubSum', () => {
	test('returns sum of contiguous subarray with maximal sum of items', () => {
		expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5);
		expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6);
		expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11);
		expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3);
		expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100);
		expect(getMaxSubSum([1, 2, 3])).toBe(6);
	});
});
describe('getMaxSubSumBrute', () => {
	test('returns sum of contiguous subarray with maximal sum of items', () => {
		expect(getMaxSubSumBrute([-1, 2, 3, -9])).toBe(5);
		expect(getMaxSubSumBrute([2, -1, 2, 3, -9])).toBe(6);
		expect(getMaxSubSumBrute([-1, 2, 3, -9, 11])).toBe(11);
		expect(getMaxSubSumBrute([-2, -1, 1, 2])).toBe(3);
		expect(getMaxSubSumBrute([100, -9, 2, -3, 5])).toBe(100);
		expect(getMaxSubSumBrute([1, 2, 3])).toBe(6);
	});
});
