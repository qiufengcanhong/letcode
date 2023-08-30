const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const str = (await readline()).toLowerCase();
    const key =(await readline()).toLowerCase();
    console.log(str.split(key).length-1);
})();
