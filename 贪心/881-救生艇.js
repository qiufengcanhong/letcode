// 给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

// 返回 承载所有人所需的最小船数 。

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people = people.sort((a,b)=>a - b);
  let left = 0;
  let right = people.length - 1;
  let amount = 0;
  while (left <= right) {
      amount++;
      if(left===right){
          left++;
      }else if (people[left] + people[right] <= limit) {
          left++;
          right--;
      }else{
          right--;
      }
  }
  return amount;
};