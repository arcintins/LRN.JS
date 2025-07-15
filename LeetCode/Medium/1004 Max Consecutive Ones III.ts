// https://leetcode.com/problems/max-consecutive-ones-iii/
function longestOnes(nums: number[], k: number): number {
  let max: number = 0;
  let start: number = 0;
  let zeroCounter: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCounter++;

    while (zeroCounter > k) {
      if (nums[start] === 0) zeroCounter--;
      start++;
    }

    max = i - start + 1 > max ? i - start + 1 : max;

  }
  return max;
};