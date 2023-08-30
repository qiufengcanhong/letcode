const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    var arr = (await readline()).split(" ");
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    var sum = 0;
    for (var i = month - 1; i > 0; i--) {
        sum += new Date(year, i, 0).getDate();
    }
    console.log(sum + Number(day));
})();
