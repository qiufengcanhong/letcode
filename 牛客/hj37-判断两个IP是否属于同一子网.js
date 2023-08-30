// IP地址是由4个0-255之间的整数构成的，用"."符号相连。
// 二进制的IP地址格式有32位，例如：10000011，01101011，00000011，00011000;每八位用十进制表示就是131.107.3.24
// 子网掩码是用来判断任意两台计算机的IP地址是否属于同一子网络的根据。
// 子网掩码与IP地址结构相同，是32位二进制数，由1和0组成，且1和0分别连续，其中网络号部分全为“1”和主机号部分全为“0”。
// 你可以简单的认为子网掩码是一串连续的1和一串连续的0拼接而成的32位二进制数，左边部分都是1，右边部分都是0。
// 利用子网掩码可以判断两台主机是否在同一子网中。
// 若两台主机的IP地址分别与它们的子网掩码进行逻辑“与”运算（按位与/AND）后的结果相同，则说明这两台主机在同一子网中。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    //ip验证function
    function checkIp(arr) {
        //遍历ip数组，如数组元素出现小于0或大于255的数据，则return false，ip非法
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0 || arr[i] > 255) {
                return false;
            }
        }
    }
    //掩码验证function
    function checkMask(arr) {
        //新建基准字符串base，由左边31个‘1’和右边31个‘0’组成
        let base = "10".padStart(32, 1).padEnd(62, 0);
        //新建空数组newArr用于存储掩码数据
        let newArr = [];
        //遍历掩码数组，如出现小于0，大于255的数据，则掩码非法，否则新数组newArr依次push由掩码的二进制数据（不足8位的通过padStart（）方法由0补足）
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0 || arr[i] > 255) {
                return false;
            } else {
                newArr.push(parseInt(arr[i]).toString(2).padStart(8, 0));
            }
        }
        //得到由掩码转换而来的新数组newArr之后，验证base是否includes newArr.join(''), 如是，return true；
        if (base.includes(newArr.join(""))) {
            return true;
        }
    }
    //获取第一行掩码数据
    while ((line = await readline())) {
        //将掩码转换为数组
        let mask = line.split(".");
        //获取第二行ip数据，并将其转换为数组
        let ip1 = (await readline()).split(".");
        //获取第三行ip数据，并将其转换为数组
        let ip2 = (await readline()).split(".");
        //如两行ip其中任意一条非法或者掩码非法，则输出1
        if (
            checkIp(ip1) == false ||
            checkIp(ip2) == false ||
            checkMask(mask) != true
        ) {
            console.log(1);
        }
        //否则
        else {
            //如ip1 与 ip二前两个字段相同，则属于同一子网络，输出0
            if (ip1.slice(0, 2).join("") == ip2.slice(0, 2).join("")) {
                console.log(0);
            }
            //否则不属于同一子网络，输出2
            else {
                console.log(2);
            }
        }
    }
})();
