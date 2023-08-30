var maxProfit = function (n, prices) {
  let empty = (new Array(n)).fill(0);
  let have = (new Array(n)).fill(-prices[0]);
  for (let i = 2; i <= prices.length; i++) {
      for (let k = 0; k < n; k++) {
          empty[k] = Math.max(empty[k], have[k] + prices[i - 1]);
          have[k] = Math.max(have[k], (empty[k - 1] || 0) - prices[i - 1]);
      }
  }
  return empty[n - 1];
};