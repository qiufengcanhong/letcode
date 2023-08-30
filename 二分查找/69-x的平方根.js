/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let temp = Math.pow(mid, 2);
      if (temp === x) {
          return mid;
      } else if (temp > x) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return right;
};