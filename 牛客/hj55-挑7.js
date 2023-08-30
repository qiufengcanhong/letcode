const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    while(word = await readline()) {
    word = parseInt(word, 10);
    let arr = [];
    for(var i=1;i<=word;i++) {
    ((i+'').includes('7') || !(i%7)) && arr.push(i);
    }
    console.log(arr.length);
}
}()
