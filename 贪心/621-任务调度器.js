/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const arr = (new Array(26)).fill(0);
  for (let i = 0; i < tasks.length; i++) {
      const temp = tasks[i].charCodeAt() - 'A'.charCodeAt();
      arr[temp]++;
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      max = Math.max(arr[i], max);
  }
  let ret = (max-1)*(n+1);
  for(let i=0;i<arr.length;i++){
      if(max===arr[i]){
          ret++;
      }
  }
  return Math.max(ret,tasks.length);
};