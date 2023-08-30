const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    function isPrime(num) {
        if (!num) return false;
        let loopMax = Math.sqrt(num);
        if (Number(num) <= 1) return false;
        if (num <= 3) return num >= 2;
        for (let i = 2; i <= loopMax; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    function getRes(arr1, arr2) {
        //     arr1 是偶数集合  arr2奇数集合
        let count = 0;
        let evensMatch = new Array(arr2.length).fill(0);
        for (let i = 0; i < arr1.length; i++) {
            let used = new Array(arr2.length).fill(0);
            if (find(used, arr2, arr1[i], evensMatch)) {
                count++;
            }
        }
        console.log(count);
    }

    function find(used, evens, num, evensMatch) {
        for (let i = 0; i < evens.length; i++) {
            if (isPrime(num + evens[i]) && used[i] == 0) {
                //            偶数和奇数可以组成素数并且该奇数没有被使用
                used[i] = 1;
                //             标记为已使用
                if (
                    evensMatch[i] == 0 ||
                    find(used, evens, evensMatch[i], evensMatch)
                ) {
                    //                 将匹配偶数保存至evensMatch
                    //                 如果该偶数还可以与其他的奇数形成质数，则将新的偶数保存到evensMatch原来的舍弃
                    //                 就是将现在的偶数 + 奇数形成的质数为最新的结果保存至evensMatch 、
                    evensMatch[i] = num;
                    return true;
                }
            }
        }
        return false;
    }

    let line;
    let arr = [];
    while ((line = await readline())) {
        arr.push(line);
        if (arr.length == 2) {
            let numberArr = arr[1].split(" ").map((i) => parseInt(i));
            let arr1 = numberArr.filter((i) => i % 2 == 0);
            let arr2 = numberArr.filter((i) => i % 2 != 0);
            let res = getRes(arr1, arr2);
            arr = [];
        }
    }
})();
