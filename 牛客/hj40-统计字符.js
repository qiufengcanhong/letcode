const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str = await readline();
    let a = str.replace(/[^a-zA-Z]+/g, "");
    let b = str.replace(/[^\s]+/g, "");
    let c = str.replace(/[^0-9]+/g, "");
    let d = str.replace(/[a-zA-Z0-9\s]+/g, "");
    console.log(a.length);
    console.log(b.length);
    console.log(c.length);
    console.log(d.length);
})();
