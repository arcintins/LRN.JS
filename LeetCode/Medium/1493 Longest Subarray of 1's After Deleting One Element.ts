// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/
function longestSubarray(nums: number[]): number {
  let zeros: number = 0;
  let start: number = 0;
  let max: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
      while (zeros > 1) {
        if (nums[start] === 0) {
          zeros--;
        }
        start++;
      }
    }
    if (i - start > max) max = i - start;
  }

  return max;
};