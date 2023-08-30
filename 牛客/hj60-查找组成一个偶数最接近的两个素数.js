const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    while ((n = parseInt(await readline()))) {
        for (let i = n / 2; i < n; i++) {
            let j = n - i;
            if (isPrime(i) && isPrime(j)) {
                console.log(j + "\n" + i);
                break;
            }
        }
    }

    function isPrime(n) {
        if (n >= 2) {
            for (let i = 2; i < Math.ceil(n / 2); i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
})();
