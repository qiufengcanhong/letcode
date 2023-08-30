const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const input = await readline();
    const strs = input.split(";");
    // console.log(JSON.stringify(strs))
    let x = 0;
    let y = 0;
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let num = Number(str.substr(1));
        if (str.length <= 3 && str.length > 1 && !isNaN(num)) {
            if (str[0] === "A") {
                x -= num;
            } else if (str[0] === "D") {
                x += num;
            } else if (str[0] === "W") {
                y += num;
            } else if (str[0] === "S") {
                y -= num;
            }
        }
    }
    console.log(x + "," + y);
})();
