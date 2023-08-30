/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
      if(s[index]>=g[i] && index>=0){
          result++;
          index--;
      }
  }
  return result;
};