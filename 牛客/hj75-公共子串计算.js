// 给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const line = await readline();
    const line2 = await readline();

    let short, long;
    if (line.length >= line2.length) {
        short = line2;
        long = line;
    } else {
        short = line;
        long = line2;
    }

    let dp = [];
    let max = 0;

    for (let i = 0; i < short.length; i++) {
        dp[i] = 0;
        for (let j = 0; j <= i; j++) {
            let str = short.slice(j, i + 1);
            if (long.indexOf(str) > -1) {
                dp[i] = Math.max(str.length, dp[i]);
                max = Math.max(max, dp[i]);
            }
        }
    }

    console.log(max);
})();
