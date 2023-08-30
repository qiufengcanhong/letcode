/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre1 = 2;
  let pre2 = 1;
  let cur = 0;
  if(n===1){
      return pre2;
  }
  if(n===2){
      return pre1;
  }
  for (let i = 3; i <= n; i++) {
      cur = pre1+pre2;
      pre2= pre1;
      pre1 =cur;
  }
  return cur;
};