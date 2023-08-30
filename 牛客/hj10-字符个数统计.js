const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str = "";
    // Write your code here
    while ((line = await readline())) {
        let tokens = line.split(" ");
        str = tokens[0];
    }
    console.log(Array.from(new Set(str.split(''))).length)
})();
