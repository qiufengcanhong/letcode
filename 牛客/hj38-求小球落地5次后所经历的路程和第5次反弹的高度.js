const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let num = parseInt(await readline());
    let shu = num;
    let sun = 2 * num;
    for (let i = 1; i < 4; i++) {
        shu = shu / 2;
        sun = sun + shu;
    }
    nums = num / 2 ** 5;
    console.log(sun + "\n" + nums);
})();
