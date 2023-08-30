const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const num = +(await readline());
    let result = {};
    while(line = await readline()){
        let tokens = line.split(' ');
        let key = tokens[0];
        let value = tokens[1]; 
        if(result[key]){
            result[key] += +value
        }else{
            result[key] = +value
        }
    }
    Object.keys(result).forEach((i)=>{
        console.log(`${i} ${result[i]}`);
    });
}()
