// 现在有一种密码变换算法。
// 九键手机键盘上的数字与字母的对应： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0，把密码中出现的小写字母都变成九键键盘对应的数字，如：a 变成 2，x 变成 9.
// 而密码中出现的大写字母则变成小写之后往后移一位，如：X ，先变成小写，再往后移一位，变成了 y ，例外：Z 往后移是 a 。
// 数字和其它的符号都不做变换。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let text = await readline();
    const arr = [
        "abc",
        2,
        "def",
        3,
        "ghi",
        4,
        "jkl",
        5,
        "mno",
        6,
        "pqrs",
        7,
        "tuv",
        8,
        "wxyz",
        9,
    ];
    text = text.replace(/[(a-z)]/g, (a) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "string" && arr[i].indexOf(a) != -1) {
                return arr[i + 1];
            }
        }
    });
    text = text.replace(/([A-Z])/g, (a) => {
        if (a == "Z") {
            return "a";
        } else {
            return String.fromCharCode(a.toLowerCase().charCodeAt(0) + 1);
        }
    });
    console.log(text);
})();
