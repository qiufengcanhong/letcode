// 给出4个1-10的数字，通过加减乘除运算，得到数字为24就算胜利,除法指实数除法运算,运算符仅允许出现在两个数字之间,本题对数字选取顺序无要求，但每个数字仅允许使用一次，且需考虑括号运算
// 此题允许数字重复，如3 3 4 4为合法输入，此输入一共有两个3，但是每个数字只允许使用一次，则运算过程中两个3都被选取并进行对应的计算操作。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    //类似深度搜索
    let status;
    while ((line = await readline())) {
        let arr = line.split(" ").map((x) => parseInt(x));
        status = false;
        dfs(-1, 0, arr, status);
        console.log(status);
    }

    function dfs(step, pre, arr) {
        if (step == 3) {
            if (pre == 24) {
                status = true;
                return;
            }
        } else {
            step++;
            for (let key in arr) {
                let newArr = JSON.parse(JSON.stringify(arr));
                let num = newArr.splice(key, 1)[0];
                dfs(step, pre + num, newArr);
                dfs(step, pre - num, newArr);
                dfs(step, pre * num, newArr);
                dfs(step, pre / num, newArr);
            }
            return;
        }
    }
})();
