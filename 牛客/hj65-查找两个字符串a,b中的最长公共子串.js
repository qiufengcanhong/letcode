const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // 双指针
    const line1 = await readline();
    const line2 = await readline();

    let short = line1.length >= line2.length ? line2 : line1;
    let long = line1.length >= line2.length ? line1 : line2;

    let common = "";
    let i = 0;
    let j = 1;
    while (i < short.length && j < short.length + 1) {
        let temp = short.slice(i, j);
        if (long.indexOf(temp) > -1) {
            common = temp.length > common.length ? temp : common;
            j++;
        } else {
            i++;
            j = i + 1;
        }
    }

    console.log(common);
})();
