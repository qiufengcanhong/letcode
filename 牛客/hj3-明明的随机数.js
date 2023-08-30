const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const nums=[];
    // Write your code here
    while(line = await readline()){
        nums.push(+line)
    }
    nums.shift();
    const result = Array.from(new Set(nums)).sort((a,b)=>{
        return a-b;
    })
    result.forEach(v=>console.log(v))
    // console.log(result);
}()
