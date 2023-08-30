const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let a;
    while ((a = await readline())) {
        let b = a.split(" ");
        if (b.length == 1) {
            "reset".startsWith(b[0])
                ? console.log("reset what")
                : console.log("unknown command");
        } else {
            let c = [];
            let d = [
                ["reset", "board", "board fault"],
                ["board", "add", "where to add"],
                ["board", "delete", "no board at all"],
                ["reboot", "backplane", "impossible"],
                ["backplane", "abort", "install first"],
            ];
            d.forEach((item) => {
                if (item[0].startsWith(b[0]) && item[1].startsWith(b[1])) {
                    c.push(item);
                }
            });
            if (c.length == 1) {
                console.log(c[0][2]);
            } else {
                console.log("unknown command");
            }
        }
    }
})();
