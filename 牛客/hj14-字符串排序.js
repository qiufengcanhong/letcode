// 给定 n 个字符串，请对 n 个字符串按照字典序排列。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let num = await readline();
    let result = []
    // Write your code here
    while(line = await readline()){
        result.push(line)
    }
    result.sort().forEach(v=>console.log(v))
    // console.log(Object.keys(result));
}()
