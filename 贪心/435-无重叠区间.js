//给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if(intervals.length===0){
      return 0;
  }
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let right = 0;
  let result = 1;
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= intervals[right][1]) {
          result++;
          right = i;
      }
  }
  return intervals.length-result;
};
