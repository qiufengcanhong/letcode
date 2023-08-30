/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let empty = [0, 0];
  let have = [-prices[0], -prices[0]];

  for (let i = 2; i <= prices.length; i++) {
      empty[1] = Math.max(empty[1], have[1] + prices[i - 1]);
      have[1] = Math.max(have[1], empty[0] - prices[i - 1]);

      empty[0] = Math.max(empty[0], have[0] + prices[i - 1]);
      have[0] = Math.max(have[0], -prices[i - 1]);
  }
  return empty[1];
};