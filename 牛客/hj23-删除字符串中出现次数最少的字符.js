const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str = await readline();
    let obj = {};
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) obj[str[i]]++;
        else obj[str[i]] = 1;
    }
    let min = Math.min(...Object.values(obj));
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] !== min) res += str[i];
    }
    console.log(res);
})();
