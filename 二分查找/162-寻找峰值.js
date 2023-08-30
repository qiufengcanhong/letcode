const findPeakElement = nums => {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
      const mid = left + (right - left) >> 1;//不断二分 寻找上升元素对,/2取整
      if (nums[mid] > nums[mid + 1]) {
          right = mid;//下降
      } else {
          left = mid + 1;//上升
      }
  }
  return left;
};