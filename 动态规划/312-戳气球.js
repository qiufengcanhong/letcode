// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

// 求所能获得硬币的最大数量。

var maxCoins = function (nums) {
  const n = nums.length;
  let points = [1, ...nums, 1]; //两边添加虚拟气球
  const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0)); //dp数组初始化
  //自底向上转移状态
  for (let i = n; i >= 0; i--) {
      //i不断减小
      for (let j = i + 1; j < n + 2; j++) {
          //j不断扩大
          for (let k = i + 1; k < j; k++) {
              //枚举k在i和j中的所有可能
              //i-j能获得的最大数量的金币等于 戳破当前的气球获得的金钱加上之前i-k,k-j区间中已经获得的金币
              dp[i][j] = Math.max(
                  //挑战最大值
                  dp[i][j],
                  dp[i][k] + dp[k][j] + points[j] * points[k] * points[i]
              );
          }
      }
  }
  return dp[0][n + 1];
};