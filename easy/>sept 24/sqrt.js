var mySqrt = function (x) {
  let negativeSubtractor = 1;
  let countdown = x;
  let count = 0;
  console.log(countdown);
  while ((countdown - negativeSubtractor) >= 0) {
      countdown -= negativeSubtractor;
      count++;
      negativeSubtractor += 2;
  }
  return count;
};



var mySqrt2 = function (x) {
    let lo = 0,
    hi = x;
  while (lo < hi) {
      const mid = parseInt((lo + hi) / 2);
      if (mid * mid === x) {
          return mid;
        }
        if (x < mid * mid) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return x < hi * hi ? hi - 1 : hi;
};
console.log(mySqrt2(4));