/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let totalCost=0;
  let totalGas=0;
  for(let i=0;i<gas.length;i++){
      totalCost+=cost[i];
      totalGas+=gas[i]
  }
  if(totalGas<totalCost){
      return -1;
  }
  let currentStore=0;
  let start=0;
  for(let i=0;i<gas.length;i++){
      currentStore=currentStore-cost[i]+gas[i];
      if(currentStore<0){
          currentStore=0;
          start=i+1;
      }
  }
  return start;
};