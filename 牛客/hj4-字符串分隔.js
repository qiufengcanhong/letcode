const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let str = "";
    while ((line = await readline())) {
        str = line;
    }
    for (let i = 0; i < str.length; i += 8) {
        if(i+8<str.length){
            console.log(str.slice(i,i+8))
        }else{
            console.log(str.slice(i).padEnd(8,'0'));
        }
    }
})();
