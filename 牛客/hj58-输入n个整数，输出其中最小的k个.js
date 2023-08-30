const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let input;

    //多行输入,使用 while(input = readline()){do something}
    //第一行的两个值取出来
    while ((input = await readline())) {
        //n 和 k取出来
        let n = input.split(" ")[0];
        let k = input.split(" ")[1];

        //字符串取出来
        //trim()可以去除字符串的头尾空格
        let arr = (await readline()).trim().split(" ");
        //排序:a-b升序 b-a降序
        arr.sort((a, b) => {
            return a - b;
        });

        const res = arr.splice(0, k).join(" ");
        console.log(res);
    }
})();
