// 完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。

// 它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。

// 例如：28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。
let num;
while (num = parseInt(await readline())) {
  let count = 0;//计数变量
  //第一个完全数是6，若小于6则输出0
  if (num < 6) {
    console.log(0);
  }
  for (let t = 6; t <= num; t++) {
    let sum = 0;
    //统计因数的和，计数到该数的1/2即可
    for (let i = 1; i <= t / 2; i++) {
      if (t % i == 0)
        sum += i;
    }
    if (sum == t)
      count++;
  }
  console.log(count);
}

