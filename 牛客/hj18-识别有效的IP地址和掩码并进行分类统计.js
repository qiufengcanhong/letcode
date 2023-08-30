const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let data = [];
    while ((line = await readline())) {
        let ipMark = line.split("~");
        data.push({
            ip: ipMark[0], //输入的IP地址
            mark: ipMark[1], //输入的子网掩码
        });
    }

    //合法私有IP的判断
    function isPriIp(ip) {
        let flag = false; //默认不是合法私有ip
        let arr = ip.split(".");
        let first = parseInt(arr[0]);
        let second = parseInt(arr[1]);
        if (
            first === 10 ||
            (first === 172 && second >= 16 && second <= 31) ||
            (first === 192 && second === 168)
        ) {
            flag = true;
        }
        return flag;
    }

    // 子网掩码合法的判断
    function checkSubnet(mark) {
        let isValid = true; //默认子网掩码是合法的
        let arr = mark.split(".");
        let binary = "";
        // 转成二进制 不足八位的 补零
        arr.forEach((item) => {
            binary += parseInt(item).toString(2).padStart(8, "0");
        });
        //子网掩码是连续1，如果后面有个0，接着后面全部是0，所以子网掩码不会有'01',只会有'10'
        if (binary.indexOf("01") > -1) {
            isValid = false;
        } else if (binary.indexOf("1") < 0 || binary.indexOf("0") < 0) {
            //子网掩码也不能是全1或全0
            isValid = false;
        }
        return isValid;
    }

    //ip归类 判断
    let ipReg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    function checkIp() {
        let counter = {
            ipA: 0,
            ipB: 0,
            ipC: 0,
            ipD: 0,
            ipE: 0,
            ipMarkErr: 0,
            privateIp: 0,
        };
        data.forEach((item) => {
            let first = parseInt(item.ip.split(".")[0]);
            if (first === 0 || first === 127) {
                //啥也不是
                return;
            } else if (!checkSubnet(item.mark)) {
                //非法子网掩码
                counter.ipMarkErr++;
            } else if (!ipReg.test(item.ip)) {
                //错误IP地址
                counter.ipMarkErr++;
            } else {
                if (isPriIp(item.ip)) {
                    //私有ip
                    counter.privateIp++;
                }
                if (first > 0 && first < 127) {
                    //A类地址
                    counter.ipA++;
                } else if (first > 127 && first < 192) {
                    //B类地址
                    counter.ipB++;
                } else if (first > 191 && first < 224) {
                    //C类地址
                    counter.ipC++;
                } else if (first > 223 && first < 240) {
                    //D类地址
                    counter.ipD++;
                } else if (first > 239 && first < 256) {
                    //E类地址
                    counter.ipE++;
                }
            }
        });
        console.log(
            counter.ipA +
                " " +
                counter.ipB +
                " " +
                counter.ipC +
                " " +
                counter.ipD +
                " " +
                counter.ipE +
                " " +
                counter.ipMarkErr +
                " " +
                counter.privateIp
        );
    }
    checkIp();
})();
