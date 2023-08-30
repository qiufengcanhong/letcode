// 现有n种砝码，重量互不相等，分别为 m1,m2,m3…mn ；
// 每种砝码对应的数量为 x1,x2,x3...xn 。现在要用这些砝码去称物体的重量(放在同一侧)，问能称出多少种不同的重量。
// 注：
// 称重重量包括 0
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let line1 = await readline();
    let line2 = await readline();
    let line3 = await readline();
    let m = line2.split(" "); //每种砝码的重量
    let x = line3.split(" "); //每种砝码对应的数量范围
    let fama = []; //序列化砝码，比如两个1g和一个2g的砝码用[1,1,2]表示
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < x[i]; j++) {
            fama.push(Number(m[i]));
        }
    }
    let kind = new Set(); //用set表示加入当前砝码之前能产生的重量种类
    kind.add(0); //set初始化为0
    // 当第一个1g砝码放入时，set中要插入原先所有元素+1g后的结构，即{0,0+1}，插入后变为{0,1}
    // 当第二个1g砝码放入时，set要插入{0+1,1+1},变为{0,1,2}
    // 第三个2g砝码放入时，set要插入{0+2,1+2,2+2},变为{0,1,2,3,4}
    for (let i = 0; i < fama.length; i++) {
        let arr = [...kind]; //用一个数组来缓存当前种类的砝码的值
        for (let k of arr) {
            kind.add(k + fama[i]);
        }
    }
    console.log(kind.size);
})();
