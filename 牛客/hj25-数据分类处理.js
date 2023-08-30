const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((str =await readline())) {
        //当能读取输入的时候进入循环
        let IArr = str.split(" "); //拆分得到I序列
        let RArr = (await readline()).split(" "); //拆分得到R序列
        IArr.shift(); //删除数组第一位，下同
        RArr.shift();
        RArr = [...new Set(RArr.sort((a, b) => a - b))]; //利用Set去重，同时排序，重新赋值给RArr
        let log = []; //定义输出数组
        RArr.forEach((item) => {
            //对R序列的每一项
            let itemArr = []; //定义临时数组
            for (let i = 0; i < IArr.length; i++) {
                if (IArr[i].includes(item)) {
                    //查找包含R单项的I序列项
                    itemArr.push(i, IArr[i]); //若找到，在临时数组中保存下标和I序列单项
                }
            }
            if (itemArr.length !== 0) {
                //如果临时数组长度大于0
                log.push(item, itemArr.length / 2, ...itemArr); //输出数组中加入R单项，I序列中符合条件的个数，并把保存的临沭数组扩展进来
            }
        });
        log.unshift(log.length); //统计输出数组的长度，并将该数字添加到输出数组的第一位
        console.log(log.join(" "));
    }
})();
