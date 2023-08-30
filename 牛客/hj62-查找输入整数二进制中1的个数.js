const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let line = "";
    while ((line = await readline())) {
        let count = parseInt(line)
            .toString(2)
            .split("")
            .filter((item) => Number(item) === 1).length;
        console.log(count);
    }
})();
