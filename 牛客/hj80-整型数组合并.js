// 题目标题：

// 将两个整型数组按照升序合并，并且过滤掉重复数组元素。
// 输出时相邻两数之间没有空格。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        let arr1 = (await readline()).split(" ").map((x) => Number(x));
        let str2 = readline();
        let arr2 = (await readline()).split(" ").map((x) => Number(x));
        console.log(
            [...new Set([...arr1, ...arr2])].sort((a, b) => a - b).join("")
        );
    }
})();
