const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const str = await readline();
    let num = parseInt(str);
    let result = "";

    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            result = result + i + " ";
            num = num / i;
        }
    }

    if (num > 1) result = result + num + " ";
    console.log(result);
})();
