const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let num = parseInt(await readline());
    let str = (await readline()).split("");
    // 声明存储当前列表和选中歌曲的变量
    let menu = [];
    let se = 1;
    // 根据输入的命令分别处理赋值
    if (num <= 4) {
        menu = [1, 2, 3, 4].slice(0, num);
        str.forEach((i) => {
            if (i === "U") {
                se === 1 ? (se = num) : (se -= 1);
            } else if (i === "D") {
                se === num ? (se = 1) : (se += 1);
            }
        });
    } else {
        str.forEach((i) => {
            if (i === "U") {
                if (se === 1) {
                    se = num;
                    menu = [num - 3, num - 2, num - 1, num];
                } else {
                    se -= 1;
                    se <= menu[0]
                        ? (menu = [se, se + 1, se + 2, se + 3])
                        : (menu = menu);
                }
            } else if (i === "D") {
                if (se === num) {
                    se = 1;
                    menu = [1, 2, 3, 4];
                } else {
                    se += 1;
                    se >= menu[3]
                        ? (menu = [se - 3, se - 2, se - 1, se])
                        : (menu = menu);
                }
            }
        });
    }
    console.log(menu.join(" "));
    console.log(se);
})();
