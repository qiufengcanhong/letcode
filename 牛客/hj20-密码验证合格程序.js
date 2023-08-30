const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((str = await readline())) {
        const regNum = /[0-9]/,
            regUp = /[A-Z]/,
            regLow = /[a-z]/,
            regOth = /[^0-9A-Za-z]/; // 其他符号 正则

        // 长度 验证
        const lenFlag = str.length > 8;

        // 包括 其中 三种
        let point = 0;
        if (regNum.test(str)) point++;
        if (regUp.test(str)) point++;
        if (regLow.test(str)) point++;
        if (str.match(regOth) && str.match(regOth).length !== str.match(/\s/))
            point++; // 排除空格和换行符

        // 验证 重复性
        const arr = [];
        for (let i = 0; i < str.length - 2; i++) {
            arr.push(str.slice(i, i + 3));
        }
        const repeatFlag = arr.length === [...new Set(arr)].length;

        // 输出结果
        const res = lenFlag && point > 2 && repeatFlag;
        console.log(res ? "OK" : "NG");
    }
})();
