// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

var maxAreaOfIsland = function(grid) {
  let row = grid.length, col = grid[0].length;
  function dfs (x, y) {
      //越界判断 当grid[x][y] === 0时 直接返回
      if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
      grid[x][y] = 0;//当grid[x][y] === 1时，将当前单元格置为0
      let ans = 1, dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];//方向数组
      for (let i = 0; i < dx.length; i++) {//上下左右不断递归，计算每个岛屿的大小
          ans += dfs(x + dx[i], y + dy[i]);
      }
      return ans;
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          res = Math.max(res, dfs(i, j));//循环网格 更新最大岛屿
      }
  }
  return res;
};