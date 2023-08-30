const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    var minDistance = function (word1, word2) {
        let n = word1.length;
        let m = word2.length;
        if (n * m === 0) return n + m;
        if (word1 === word2) return 0;
        let dp = [];
        for (let i = 0; i <= n; i++) {
            dp.push([]);
            for (let j = 0; j <= m; j++) {
                if (i * j) {
                    dp[i][j] =
                        word1[i - 1] == word2[j - 1]
                            ? dp[i - 1][j - 1]
                            : Math.min(
                                  dp[i - 1][j],
                                  dp[i][j - 1],
                                  dp[i - 1][j - 1]
                              ) + 1;
                } else {
                    dp[i][j] = i + j;
                }
            }
        }
        return dp[n][m];
    };

    while ((str1 = await readline())) {
        const str2 = await readline();
        console.log(minDistance(str1, str2));
    }
})();
