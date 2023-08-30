/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let pre2 = 0;
  let pre1 = 1;
  let cur = 0;
  if (n === 0) {
      return pre2;
  }
  if (n === 1) {
      return pre1;
  }
  for (let i = 2; i <= n; i++) {
      cur = pre1 + pre2;
      pre2 = pre1;
      pre1 = cur;
  }
  return cur;
};