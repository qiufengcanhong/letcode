var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);//中间节点
      if (nums[pivot] < nums[high]) {//当前节点比high节点的值小，让high等于pivot
          high = pivot;
      } else {
          low = pivot + 1;//当前节点比大于等于high节点的时候，让low等于pivot+1
      }
  }
  return nums[low];//最后相遇的节点就是最小值
};