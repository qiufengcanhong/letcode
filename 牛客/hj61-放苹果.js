const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let str;
    while ((str = readline())) {
        let arr = str.split(" ");
        let m = parseInt(arr[0]),
            n = parseInt(arr[1]);
        console.log(getCount(m, n));
    }

    function getCount(m, n) {
        if (m == 0 || n == 1) {
            //极端情况1：都是最小值情况
            return 1;
        } else if (n > m) {
            //极端情况2:盘子比苹果多，那肯定有n-m个盘子空着
            return getCount(m, m);
        } else {
            //极端情况3:范围：[至少一个盘子空着----所有盘子都不空，都有苹果]
            //假设有一个盘子为空，则(m,n)问题转化为将m个苹果放在n-1个盘子上，即求得(m,n-1)即可
            //假设所有盘子都装有苹果，则每个盘子上至少有一个苹果，即最多剩下m-n个苹果，问题转化为将m-n个苹果放到n个盘子上，即求(m-n，n)
            return getCount(m, n - 1) + getCount(m - n, n);
        }
    }
})();
