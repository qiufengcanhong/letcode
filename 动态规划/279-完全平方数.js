/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = (new Array(n + 1)).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
      dp[i] = i;
      for (let j = 1; i - j * j >=0; j++) {
          dp[i] = Math.min(dp[i], dp[i - j * j]+ 1);
      }
  }
  return dp[n];
};