// 问题描述：在计算机中，通配符一种特殊语法，广泛应用于文件搜索、数据库、正则表达式等领域。现要求各位实现字符串通配符的算法。
// 要求：
// 实现如下2个通配符：
// *：匹配0个或以上的字符（注：能被*和?匹配的字符仅由英文字母和数字0到9组成，下同）
// ？：匹配1个字符

// 注意：匹配时不区分大小写。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    //获取第一行输入流
    let line1 = await readline();
    //获取第二行输入流
    let line2 = await readline();
    //构建验证通配符的函数；
    function checkWildcard(str1, str2) {
        //构建新string，将"?","*"转换成正则表达式中相应的表达，注意不需要大小写，所以都转换成小写（大写亦可）；
        let newStr1 = str1
            .replace(/\?/g, "[A-Za-z0-9]")
            .replace(/\*/g, "[A-Za-z0-9]{0,}")
            .toLowerCase();
        let newStr2 = str2.toLowerCase();
        let output = false;
        //由示例5可知，需完全匹配，故加上首尾符号"^"和"$"；
        let regex1 = new RegExp("^" + newStr1 + "$");
        //如匹配，则output值由false转变为true；
        if (newStr2.match(regex1)) {
            output = true;
        }
        //如不匹配，输出output初始值false；
        return output;
    }
    console.log(checkWildcard(line1, line2));
})();
