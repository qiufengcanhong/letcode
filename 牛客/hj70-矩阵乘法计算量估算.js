// 矩阵乘法的运算量与矩阵乘法的顺序强相关。
// 例如：

// A是一个50×10的矩阵，B是10×20的矩阵，C是20×5的矩阵

// 计算A*B*C有两种顺序：((AB)C)或者(A(BC))，前者需要计算15000次乘法，后者只需要3500次。

// 编写程序计算不同的计算顺序需要进行的乘法次数。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const n = parseInt(await readline());
    const matrixArr = [];
    for (let i = 0; i < n; i++) {
        matrixArr.push((await readline()).split(" ").map(Number));
    }
    const str = await readline();
    const cal = (mat1, mat2) => {
        return mat1[0] * mat1[1] * mat2[1];
    };
    const oppArr = [];
    const numArr = [];
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            oppArr.push("(");
        }
        if (/[A-Z]/.test(str[i])) {
            numArr.push(str[i]);
        }
        if (str[i] === ")") {
            if (oppArr[oppArr.length - 1] === "(") {
                const index1 = numArr.pop().charCodeAt() - 65;
                const index2 = numArr[numArr.length - 1].charCodeAt() - 65;
                const mat1 = matrixArr[index2];
                const mat2 = matrixArr[index1];
                res += cal(mat1, mat2);
                matrixArr[index2] = [
                    matrixArr[index2][0],
                    matrixArr[index1][1],
                ];
                oppArr.pop();
            }
        }
    }
    console.log(res);
})();
