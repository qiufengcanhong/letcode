const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str = await readline();
    // 获取截取数量
    let num = parseInt(await readline());

    /*
     * ECMAScript 提供3个从字符串中提取子字符串的方法：
     * slice() :第一个参数（字符串开始的位置），第二个参数（提取结束的位置（位置之前的字符会被提取出来））
     * substring() :同slice()
     * substr() : 第一个参数同前两种方法，第二个参数表示返回的字符串数量
     */
    let newstr = str.substr(0, num);
    console.log(newstr);
})();
