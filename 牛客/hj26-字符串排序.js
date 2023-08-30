const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let res = "";
        let arr = line.split("");
        let sorted = [];
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (
                    arr[j].charCodeAt(0) == 65 + i ||
                    arr[j].charCodeAt(0) == 97 + i
                ) {
                    sorted.push(arr[j]);
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (!/[A-Za-z]/g.test(arr[i])) {
                sorted.splice(i, 0, arr[i]);
            }
        }
        console.log(sorted.join(""));
    }
})();
