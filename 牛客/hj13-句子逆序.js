// 将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”

// 所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
   let str = '';
    while(line = await readline()){
        str =line;
    }
    console.log(str.split(' ').reverse().join(' '));
}()
