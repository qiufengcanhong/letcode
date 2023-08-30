/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const dp = (new Array(obstacleGrid.length)).fill(0).map(v => (new Array(obstacleGrid[0].length)).fill(0));

  for (let i = 0; i < obstacleGrid.length && !obstacleGrid[i][0]; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < obstacleGrid[0].length && !obstacleGrid[0][i]; i++) {
    dp[0][i] = 1;
  }
  for (i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[i].length; j++) {
      if (!obstacleGrid[i][j]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[dp.length - 1].pop();
};