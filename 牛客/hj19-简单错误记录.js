const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let obj = {};
    let str;
    while ((str = await readline())) {
        const [c, n] = str.split(" ");
        const s = c.substr(c.lastIndexOf("\\") + 1).substr(-16);
        obj[`${s} ${n}`] = (obj[`${s} ${n}`] || 0) + 1;
    }

    Object.keys(obj)
        .slice(-8)
        .forEach((el) => {
            console.log(`${el} ${obj[el]}`);
        });
})();
