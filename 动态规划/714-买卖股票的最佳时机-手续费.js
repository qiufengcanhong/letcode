/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let empty = 0;
  let have = -prices[0];
  for (let i = 2; i <= prices.length; i++) {
    empty = Math.max(empty, have + prices[i - 1] - fee);
    have = Math.max(have, empty - prices[i - 1]);
  }
  return empty;
};