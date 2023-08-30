const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    function outputFirstLetter(str) {
        const len = str.length;
        for (let i = 0; i < len; i++) {
            if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
                return str[i];
            }
        }
        return -1;
    }

    console.log(outputFirstLetter(await readline()));
})();
