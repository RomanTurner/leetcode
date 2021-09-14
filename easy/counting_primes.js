/**
 * 
 * 
 * Count the number of prime numbers less than a non-negative number, n.
 * Input: n = 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 */

var countPrimes = function (n) {
  if (n < 3) {
    return 0;
  }

  let arr = new Array(n).fill(1);

  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) {
      continue;
    }
    for (let j = i * i; j < n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.reduce((a, b) => b + a) - 2;
};
