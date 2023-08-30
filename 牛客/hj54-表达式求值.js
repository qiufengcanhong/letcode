const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    const opsMap = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
    };

    const calc = (nums = [], ops = []) => {
        //   console.log(nums, ops)
        if (nums.length < 2 || ops.length === 0) return;
        const op = ops.pop();
        const b = ~~nums.pop();
        const a = ~~nums.pop();
        //   console.log(op, a, b)

        switch (op) {
            case "+":
                nums.push(a + b);
                break;
            case "-":
                nums.push(a - b);
                break;
            case "*":
                nums.push(a * b);
                break;
            default:
                nums.push(a / b);
        }
    };

    const calculator = (str = "") => {
        const cs = str.split("");
        const nums = [0];
        const ops = [];

        for (let i = 0; i < cs.length; i++) {
            let c = cs[i];
            if (c === "(") {
                // 入栈
                ops.push("(");
                if (cs[i + 1] === "-" || cs[i + 1] === "+") {
                    nums.push(0);
                }
            } else if (c === ")") {
                while (ops.length) {
                    if (ops[ops.length - 1] !== "(") {
                        calc(nums, ops);
                    } else {
                        ops.pop();
                        break;
                    }
                }
            } else {
                if (/\d/.test(c)) {
                    while (i + 1 < cs.length && /\d/.test(cs[i + 1])) {
                        c += cs[i + 1];
                        i++;
                    }
                    nums.push(c);
                } else {
                    // 加减乘除
                    while (ops.length && ops[ops.length - 1] !== "(") {
                        // 根据优先级进行运算
                        const topOp = ops[ops.length - 1];
                        if (opsMap[topOp] >= opsMap[c]) {
                            calc(nums, ops);
                        } else {
                            break;
                        }
                    }
                    ops.push(c);
                }
            }
        }
        while (ops.length) calc(nums, ops);
        return nums[nums.length - 1];
    };

    while ((input = await readline())) {
        console.log(calculator(input));
    }
})();
