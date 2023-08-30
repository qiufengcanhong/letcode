/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let empty = 0;
  let have = -prices[0];
  let freeze = 0;
  for (let i = 2; i <= prices.length; i++) {
    let temp = empty;
    empty = Math.max(empty, have + prices[i - 1]);
    have = Math.max(have, freeze - prices[i - 1]);
    freeze = temp;
  }
  return empty;
};
let prices = [1, 2, 3, 0, 2];
maxProfit(prices)