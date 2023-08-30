const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let line = await readline();
    let arr = line.split("").reverse();
    let result = Array.from(new Set(arr));
    console.log(result.join(''));
})();
