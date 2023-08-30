// 在命令行输入如下命令：
// xcopy /s c:\\ d:\\e，
// 各个参数如下：
// 参数1：命令字xcopy
// 参数2：字符串/s
// 参数3：字符串c:\\
// 参数4: 字符串d:\\e
// 请编写一个参数解析程序，实现将命令行各个参数解析出来。
// 解析规则：
// 1.参数分隔符为空格
// 2.对于用""包含起来的参数，如果中间有空格，不能解析为多个参数。比如在命令行输入xcopy /s "C:\\program files" "d:\"时，参数仍然是4个，第3个参数应该是字符串C:\\program files，而不是C:\\program，注意输出参数时，需要将""去掉，引号不存在嵌套情况。
// 3.参数不定长
// 4.输入由用例保证，不会出现不符合要求的输入


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str;
    while ((str = await readline())) {
        let arr;
        arr = [];
        let flag = false;
        let word = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '"') {
                flag = !flag;
            } else if (str[i] == " " && !flag) {
                arr.push(word);
                word = "";
            } else {
                word += str[i];
            }
        }
        arr.push(word);

        console.log(arr.length);
        arr.forEach((el) => {
            console.log(el);
        });
    }
})();
