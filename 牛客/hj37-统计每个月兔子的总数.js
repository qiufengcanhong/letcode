const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let m = await readline();
    let sum = 1;
    let a = 0;
    let b = 0;
    for (let i = 2; i < m; i++) {
        sum = sum + a;
        a = b;
        b = sum;
    }
    console.log(sum + a + b);
})();
