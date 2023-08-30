const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let str = await readline();
    let arr = str.split("");
    console.log(arr.sort().join(""));
})();
