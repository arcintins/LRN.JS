// https://leetcode.com/problems/power-of-three/description/?source=submission-noac
function isPowerOfThree(n: number): boolean | void {
    if (n / 3 === 1 || n === 1) return true;
    if (n / 3 < 1) return false;
    if (n / 3 > 1) return isPowerOfThree(n / 3);
};