const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let temp = await readline();

    if (typeof parseInt(temp) === "number") {
        count();
    }

    function count() {
        // 公式推到：
        // 公鸡个数 cock，母鸡个数 hen，雏鸡个数 chicks = 100 - cock - hen
        // 5*cock + 3 * hen + (100 - cock - hen)/3 = 100 元
        // 推出：hen = 25 - 7 * cock / 4
        // 因为 hen >= 0 , 25 - 7 * cock / 4 >= 0 推出
        // 0 <= cock <= 15
        // 因为 hen 是正整数，所以，cock 是4的倍数，所以cock 的取值为：0 4 8 12
        // 总结：
        // 1. 公鸡的个数可能: [0, 4, 8, 12]
        let cockArr = [0, 4, 8, 12];
        cockArr.map((cock) => {
            // 2. 母鸡、雏鸡与公鸡个数的关系
            let hen = 25 - (7 * cock) / 4;
            let chicks = 100 - cock - hen;
            console.log(cock, hen, chicks);
        });
    }
})();
