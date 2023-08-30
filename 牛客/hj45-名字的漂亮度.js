// 给出一个字符串，该字符串仅由小写字母组成，定义这个字符串的“漂亮度”是其所有字母“漂亮度”的总和。
// 每个字母都有一个“漂亮度”，范围在1到26之间。没有任何两个不同字母拥有相同的“漂亮度”。字母忽略大小写。

// 给出多个字符串，计算每个字符串最大可能的“漂亮度”。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((n = await readline())) {
        for (let i = 0; i < n; i++) {
            let str = await readline();
            let map = new Array(26).fill(0);
            let res = 0;
            let arr = str.toLowerCase().split("");
            arr.forEach((ele) => {
                map[ele.charCodeAt(0) - 97]++;
            });
            map.sort((a, b) => b - a);
            for (let i = 0; i < 26; i++) {
                res += map[i] * (26 - i);
            }
            console.log(res);
        }
    }
})();
