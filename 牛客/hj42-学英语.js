// Jessi初学英语，为了快速读出一串数字，编写程序将数字转换成英文：

// 具体规则如下:
// 1.在英语读法中三位数字看成一整体，后面再加一个计数单位。从最右边往左数，三位一单位，例如12,345 等
// 2.每三位数后记得带上计数单位 分别是thousand, million, billion.
// 3.公式：百万以下千以上的数 X thousand X, 10亿以下百万以上的数：X million X thousand X, 10 亿以上的数：X billion X million X thousand X. 每个X分别代表三位数或两位数或一位数。
// 4.在英式英语中百位数和十位数之间要加and，美式英语中则会省略，我们这个题目采用加上and，百分位为零的话，这道题目我们省略and

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "forteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const twieties = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const range = [1e2, 1e3, 1e6, 1e9, 1e12];
    const ranges = ["hundred", "thousand", "million", "billion"];

    function transfer(num) {
        // terminor
        if (num <= 9) return ones[num];
        if (num <= 19) return tens[num % 10];
        if (num <= 99)
            return (
                twieties[Math.floor(num / 10)] +
                (num % 10 == 0 ? "" : " " + ones[num % 10])
            );

        // 递归调用
        for (let i = 0; i < 4; i++) {
            if (num < range[i + 1]) {
                return (
                    transfer(Math.floor(num / range[i])) +
                    " " +
                    ranges[i] +
                    (num % range[i] == 0
                        ? " "
                        : (i != 0 ? " " : " and ") + transfer(num % range[i]))
                );
            }
        }
        return "";
    }

    // const num = Number('2222222') // two million two hundred and twenty two thousand two hundred and twenty two
    const num = Number(await readline());
    console.log(transfer(num));
})();
