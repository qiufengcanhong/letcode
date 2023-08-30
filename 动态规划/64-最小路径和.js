//给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

//说明：每次只能向下或者向右移动一步。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(dp) {
  let row = dp.length, col = dp[0].length

  for(let i = 1; i < row; i++)//初始化第一列
      dp[i][0] += dp[i - 1][0]

  for(let j = 1; j < col; j++)//初始化第一行
      dp[0][j] += dp[0][j - 1]

  for(let i = 1; i < row; i++)
      for(let j = 1; j < col; j++)
          dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])//取上面和左边最小的
  
  return dp[row - 1][col - 1]
};