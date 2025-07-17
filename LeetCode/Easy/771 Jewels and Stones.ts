// https://leetcode.com/problems/jewels-and-stones/
function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsSet: Set<string> = new Set(jewels);
  let sum: number = 0;

  for (let i: number = 0; i < stones.length; i++) {
    if (jewelsSet.has(stones[i])) sum++;
  }
  
  return sum;
};