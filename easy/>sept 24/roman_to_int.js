const numeralMap = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

var romanToInt = function (s) {
  let i = 0,
    sum = 0;
  while (i < s.length) {
    current = numeralMap[s[i]];
    next = numeralMap[s[i + 1]];
    if (current < next) {
      sum += next - current;
      i += 2;
    } else {
      sum += current;
      i++;
    }
  }
  return sum;
};
