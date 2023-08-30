const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str = await readline(); //读取输入
    let arr = str.split(" ").map(Number); //把输入变成数字数组
    let n = arr[0]; //总节点数
    let removeNum = arr[arr.length - 1]; //要移除的节点
    let unRemoveArr = []; //定义未移除节点的数组
    unRemoveArr[0] = arr[1]; //第一个节点为数字数组下标为1的数字
    for (let i = 0, j = 0; i < n - 1; i++, j += 2) {
        //执行五次加入节点
        let tempArr = arr.slice(2 + j, 4 + j); //截取节点开头和新加入的节点数字
        let start = tempArr[1]; //节点开头
        let newNum = tempArr[0]; //新加入的节点数字
        let index = unRemoveArr.indexOf(start); //节点开头的下标
        unRemoveArr.splice(index + 1, 0, newNum); //加入新数字
    }
    let RemovedArr = unRemoveArr.filter((item) => item != removeNum); //删除要移除的节点
    console.log(RemovedArr.join(" ")); //输出
})();

