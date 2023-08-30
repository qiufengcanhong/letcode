const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((n = await readline())) {
        let row = Number(n);
        let arr = [1];
        for (var i = 2; i < row + 1; i++) {
            //确定第一行
            arr.push(arr[arr.length - 1] + i);
        }
        for (var j = 0; j < row; j++) {
            let str = "";
            arr.slice(j).forEach((item) => {
                str = str + (item - j) + " ";
            });
            console.log(str);
        }
    }
    //先构造出第一行 剩下的依次截取后-1即可。
    // 第一行：1 3 6 10 (1+2=3+3=6+4=10) :第一行n个数字，第二个等于第一个只值+2，第三个等于第二个值+3，第四个等于第三个值+4
    // 第二行截掉第一行的第一个再减1: 2 5 9
    // 第三行截掉第一行第二个再减2类似：4 8
    // 第四行截掉第一行第三个再减3：7
})();
