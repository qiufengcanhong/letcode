
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let empty = 0;
  let have = -prices[0];
  for (let i = 2; i <= prices.length; i++) {
      empty = Math.max(empty, have + prices[i - 1]);
      have = Math.max(have, empty - prices[i - 1]);
  }
  return empty;
};