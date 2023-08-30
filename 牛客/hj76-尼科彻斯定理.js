// 证尼科彻斯定理，即：任何一个整数m的立方都可以写成m个连续奇数之和。

// 例如：

// 1^3=1

// 2^3=3+5

// 3^3=7+9+11

// 4^3=13+15+17+19

// 输入一个正整数m（m≤100），将m的立方写成m个连续奇数之和的形式输出。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = +(await readline()))) {
        let start = line * (line - 1) + 1;
        let res = [];
        for (let i = 0; i < line; i++) {
            res.push(start + i * 2);
        }
        console.log(res.join("+"));
    }
})();
