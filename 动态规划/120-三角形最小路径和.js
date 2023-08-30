/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = (new Array(triangle.length).fill([]));
  for (let i = 0; i < triangle.length; i++) {
      dp[triangle.length - 1][i] = triangle[triangle.length - 1][i];
  }
  for (i = triangle.length - 2; i >= 0; i--) {
      for (j = 0; j < triangle[i].length; j++) {
          dp[i][j]=Math.min(dp[i+1][j],dp[i+1][j+1])+triangle[i][j];
      }
  }
  return dp[0][0];
};