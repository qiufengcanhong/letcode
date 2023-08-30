// 按照指定规则对输入的字符串进行处理。

// 详细描述：

// 第一步：将输入的两个字符串str1和str2进行前后合并。如给定字符串 "dec" 和字符串 "fab" ， 合并后生成的字符串为 "decfab"

// 第二步：对合并后的字符串进行排序，要求为：下标为奇数的字符和下标为偶数的字符分别从小到大排序。这里的下标的意思是字符在字符串中的位置。注意排序后在新串中仍需要保持原来的奇偶性。例如刚刚得到的字符串“decfab”，分别对下标为偶数的字符'd'、'c'、'a'和下标为奇数的字符'e'、'f'、'b'进行排序（生成 'a'、'c'、'd' 和 'b' 、'e' 、'f'），再依次分别放回原串中的偶数位和奇数位，新字符串变为“abcedf”

// 第三步：对排序后的字符串中的'0'~'9'、'A'~'F'和'a'~'f'字符，需要进行转换操作。
// 转换规则如下：
// 对以上需要进行转换的字符所代表的十六进制用二进制表示并倒序，然后再转换成对应的十六进制大写字符（注：字符 a~f 的十六进制对应十进制的10~15，大写同理）。
// 如字符 '4'，其二进制为 0100 ，则翻转后为 0010 ，也就是 2 。转换后的字符为 '2'。
// 如字符 ‘7’，其二进制为 0111 ，则翻转后为 1110 ，对应的十进制是14，转换为十六进制的大写字母为 'E'。
// 如字符 'C'，代表的十进制是 12 ，其二进制为 1100 ，则翻转后为 0011，也就是3。转换后的字符是 '3'。
// 根据这个转换规则，由第二步生成的字符串 “abcedf” 转换后会生成字符串 "5D37BF"。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        let res = "";
        let str = getSortStr(line.replace(/\s+/g, ""));
        // console.log(str);
        for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() < "g") {
                res += parseInt(
                    parseInt(str[i], 16)
                        .toString(2)
                        .padStart(4, "0")
                        .split("")
                        .reverse()
                        .join(""),
                    2
                )
                    .toString(16)
                    .toUpperCase();
            } else {
                res += str[i];
            }
        }
        console.log(res);
    }
    function getSortStr(str) {
        let even = [],
            odd = [],
            res = "";
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                even.push(str[i]);
            } else {
                odd.push(str[i]);
            }
        }
        even.sort();
        odd.sort();
        let len = Math.max(even.length, odd.length);
        for (let i = 0; i < len; i++) {
            res += (even[i] || "") + (odd[i] || "");
        }
        return res;
    }
})();
