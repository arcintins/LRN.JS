// https://leetcode.com/problems/subarray-sum-equals-k/description/
function subarraySum(nums: number[], k: number): number {
  let result: number = 0;
  let prefixSum: number = 0;
  let prefixSumMap = new Map<number, number>();
  prefixSumMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (prefixSumMap.has(prefixSum - k)) result += prefixSumMap.get(prefixSum - k) || 0;
    if (prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    } else {
      prefixSumMap.set(prefixSum, 1);
    }
  }

  return result;
};