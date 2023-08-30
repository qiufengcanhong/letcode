const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let line;

    while ((line = parseInt(await readline()))) {
        let outVal = (line - (line % 2)) / 2;
        console.log(outVal);
    }
})();
