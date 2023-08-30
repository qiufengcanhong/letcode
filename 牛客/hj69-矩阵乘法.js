// 如果A是个x行y列的矩阵，B是个y行z列的矩阵，把A和B相乘，其结果将是另一个x行z列的矩阵C。这个矩阵的每个元素是由下面的公式决定的

// 矩阵的大小不超过100*100
// 输入描述：
// 第一行包含一个正整数x，代表第一个矩阵的行数
// 第二行包含一个正整数y，代表第一个矩阵的列数和第二个矩阵的行数
// 第三行包含一个正整数z，代表第二个矩阵的列数
// 之后x行，每行y个整数，代表第一个矩阵的值
// 之后y行，每行z个整数，代表第二个矩阵的值
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((line = await readline())) {
        let x = parseInt(line);
        let y = parseInt(await readline());
        let z = parseInt(await readline());

        let A = [];
        let B = [];
        let C = Array(x)
            .fill(0)
            .map((x) => Array(z).fill(0));

        for (let i = 0; i < x; i++) {
            A.push(await readline());
        }
        for (let i = 0; i < y; i++) {
            B.push(await readline());
        }
        A = A.map((x) => x.split(" ").map((x) => parseInt(x)));
        B = B.map((x) => x.split(" ").map((x) => parseInt(x)));

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < z; j++) {
                for (let k = 0; k < y; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        for (let item of C) {
            console.log(item.join(" "));
        }
    }
})();
