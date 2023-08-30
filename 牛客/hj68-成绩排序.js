const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let n;
    while ((n = parseInt(await readline()))) {
        let flag = parseInt(await readline());
        let score = [];
        for (let i = 0; i < n; i++) {
            let item = (await readline()).trim().split(" ");
            score.push({
                name: item[0],
                point: Number(item[1]),
                index: i,
            });
        }
        // 排序
        score.sort((a, b) => {
            if (a.point === b.point) {
                return a.index - b.index;
            } else if (flag === 0) {
                return b.point - a.point;
            } else if (flag === 1) {
                return a.point - b.point;
            }
        });
        for (let i = 0; i < n; i++) {
            const item = JSON.parse(JSON.stringify(score[i]));
            console.log(item.name + " " + item.point);
        }
    }
})();
