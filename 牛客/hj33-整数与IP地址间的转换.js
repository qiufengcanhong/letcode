// 原理：ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
// 一个长整数。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        if (line.includes(".")) {
            toNum(line);
        } else {
            toIp(line);
        }
    }
    function toIp(num) {
        const str = Number(num).toString(2).padStart(32, "0");
        const arr = [
            str.slice(0, 8),
            str.slice(8, 16),
            str.slice(16, 24),
            str.slice(24, 32),
        ];
        const ip = arr.map((ele) => parseInt(ele, 2)).join(".");
        console.log(ip);
    }

    function toNum(ip) {
        const arr = ip
            .split(".")
            .map((ele) => Number(ele).toString(2))
            .map((ele) => ele.padStart(8, "0"));
        const num = arr.join("");
        console.log(parseInt(num, 2));
    }
})();
