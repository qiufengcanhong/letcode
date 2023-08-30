const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let i = 0;
    while ((line = await readline())) {
        i++;
        let type = i % 2 == 0;
        let arr = line.split("");
        let newArr = [];
        arr.forEach((str) => {
            if (/[a-z]/.test(str)) {
                if (type) {
                    if (str == "a") {
                        newArr.push("Z");
                    } else {
                        newArr.push(
                            String.fromCharCode(
                                str.toUpperCase().charCodeAt(0) - 1
                            )
                        );
                    }
                } else {
                    if (str == "z") {
                        newArr.push("A");
                    } else {
                        newArr.push(
                            String.fromCharCode(
                                str.toUpperCase().charCodeAt(0) + 1
                            )
                        );
                    }
                }
            } else if (/[A-Z]/.test(str)) {
                if (type) {
                    if (str == "A") {
                        newArr.push("z");
                    } else {
                        newArr.push(
                            String.fromCharCode(
                                str.toLowerCase().charCodeAt(0) - 1
                            )
                        );
                    }
                } else {
                    if (str == "Z") {
                        newArr.push("a");
                    } else {
                        newArr.push(
                            String.fromCharCode(
                                str.toLowerCase().charCodeAt(0) + 1
                            )
                        );
                    }
                }
            } else if (/[0-9]/.test(str)) {
                if (type) {
                    if (str == "0") {
                        newArr.push("9");
                    } else {
                        newArr.push(+str - 1);
                    }
                } else {
                    if (str == "9") {
                        newArr.push("0");
                    } else {
                        newArr.push(+str + 1);
                    }
                }
            } else {
                newArr.push(str);
            }
        });
        console.log(newArr.join(""));
    }
})();
