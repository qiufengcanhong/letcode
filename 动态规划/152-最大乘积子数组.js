/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = nums.map((v) => {
      return [v, v];
  })
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {

      dp[i][0] = Math.min(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]);
      dp[i][1] = Math.max(dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i]);
      res = Math.max(dp[i][1], res);

  }
  return res;
};