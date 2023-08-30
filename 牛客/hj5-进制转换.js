const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let target = '';
    // Write your code here
    while(line = await readline()){
        target =line;
    }
    console.log(parseInt(target,16));
}()
