const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let str = await readline();
    const num = Number(str).toString(2);
    console.log(String(num).split('').filter(v=>v==='1').length)
}()
