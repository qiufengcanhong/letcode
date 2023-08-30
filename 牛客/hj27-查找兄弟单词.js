const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let argArr = (await readline()).split(" ");
    let j = 0;
    let num = argArr[j++] - 0;
    let arrs = [];
    let findArr = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let line = argArr[j++];
        arrs.push(line);
    }
    let target = argArr[j++];
    let k = argArr[j++];
    for (let i = 0; i < num; i++) {
        if (
            arrs[i] !== target &&
            arrs[i].split("").sort().join("") ===
                target.split("").sort().join("")
        ) {
            sum++;
            findArr.push(arrs[i]);
        }
    }
    findArr = findArr.sort();
    console.log(sum);
    if (findArr[k - 1]) {
        console.log(findArr[k - 1]);
    }
})();
