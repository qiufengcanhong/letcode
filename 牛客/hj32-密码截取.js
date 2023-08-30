const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // 最长回文字符串 双指针
    const line = await readline();

    let res = [];
    for (let i = 0; i < line.length; i++) {
        let temp = [];
        if (line[i] === line[i + 1]) {
            temp = [line[i], line[i + 1]];
            temp = getPsd(temp, i - 1, i + 2);
            res = temp.length > res.length ? temp : res;
        }
        temp = [line[i]];
        temp = getPsd(temp, i - 1, i + 1);
        res = temp.length > res.length ? temp : res;
    }
    console.log(res.length);

    function getPsd(arr, i, j) {
        while (i > -1 && j < line.length) {
            if (line[i] === line[j]) {
                arr.unshift(line[i]);
                arr.push(line[j]);
                i--;
                j++;
            } else {
                return arr;
            }
        }
        return arr;
    }
})();
