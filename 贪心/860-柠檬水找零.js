var lemonadeChange = function (bills) {
  let five = 0, ten = 0;
  for (const bill of bills) {
      if (bill === 5) {//面值为5 直接可以兑换柠檬水
          five += 1;
      } else if (bill === 10) {//面值为10 兑换柠檬水 还需要找5元
          if (five === 0) {
              return false;
          }
          five -= 1;
          ten += 1;
      } else {//面值为20 兑换柠檬水 需要找3个5元或一个10元一个5元
          if (five > 0 && ten > 0) {
              five -= 1;
              ten -= 1;
          } else if (five >= 3) {
              five -= 3;
          } else {
              return false;
          }
      }
  }
  return true;
};