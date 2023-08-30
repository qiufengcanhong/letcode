/*最长上升子序列问题
中间最高，向两边逐渐减小（相等也不行）。不要求最高的同学左右人数必须相等。
不允许改变队列元素的先后顺序，也就是说，只能剔除不能排序。
计算最少需要出列几名同学满足以上要求，也就是说，剔除某些同学，剩下的队列自然而然的满足要求
 
（1）计算出每个同学左边最多有几个人满足从左到右依次增大的序列要求（包括自己）。
示例：186 186 150 200 160 130 197 200
      1   1   1   2   2   1   3   4
动态方程：
（2）计算出每个同学右边最多有几个人满足从右到左依次增大的序列要求（包括自己）。
示例：186 186 150 200 160 130 197 200
      3   3   2   3   2   1   1   1
动态方程：
（3）将左右最多序列人数相加减一（自己加了两遍），就得到以该数为中心时，所在队列最多人数。
然后依次算出所有的队列的最多人数，然后与总人数相减，其中最小值就是最少剔除人数。
总人数-该数所在队列人数=需要出队的人数
*/

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    function fn(arr) {
        let dp = [1]; // 保存每个元素所在位置的左边最长递增子序列长度，左边第一个元素只有自己，所以是1
        for (let i = 1; i < arr.length; i++) {
            dp[i] = 1; // 每个元素首先有个自己，初始化为1
            for (let j = 0; j < i; j++) {
                if (arr[j] < arr[i]) {
                    // 左边元素小于基准元素
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        return dp;
    }
    // 以每一个人作为基准，寻找左边最长递增子序列，右边的也可以反转求值后再反转
    // 求每个人为基准的最长左递增子序列长度集合

    let n = Number(await readline()),
        dp = [];

    let stu = (await readline())
        .split(" ")
        .map((i) => Number(i));

    let dp1 = fn(stu),
        dp2 = fn(stu.reverse()).reverse(),
        max = 1;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp1[i] + dp2[i]);
    }

    console.log(n - max + 1); // 基准元素两次参与计算，需要+1
})();
