// 给你一个满足下述两条属性的 m x n 整数矩阵：

// 每行中的整数从左到右按非递减顺序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

var searchMatrix = function(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      const x = matrix[Math.floor(mid / n)][mid % n];//一维坐标转换成二维坐标
      if (x < target) {
          low = mid + 1;
      } else if (x > target) {
          high = mid - 1;
      } else {
          return true;
      }
  }
  return false;
};