const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const b = (await readline()).split("");
    const a = (await readline()).split("");
    let c = 0;
    let res = "";
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = (c % 10) + res;
        c = c > 9 ? 1 : 0;
    }
    console.log(res);
})();
// 使用split方法，将字符串转换为数组

// 通过判断a,b,c的长度，决定是否还需要就行对应的位进行相加

// 使用~~a.pop()的目的：保证若b的长度大于a的长度，则此时a.pop()=undefined，~~undefined=0

// 将两个位置上的数进行相加，若大于9，则需要进位，即，将c的值存为true，这样当进行相加时，true会进行变量提升为1

// 5.输出最后结果的时候，由于前面可能存在0，所以使用字符串的replace方法将前面的0去掉。