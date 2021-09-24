var duplicateZeros = function (arr) {
  let zeroes = 0;
  let len = arr.length - 1;
  for (let left = 0; left <= len - zeroes; left++) {
    if (arr[left] === 0) {
      if (left === len - zeroes) {
        arr[len] = 0;
        len -= 1;
        break;
      }
      zeroes++;
    }
  }

  let last = len - zeroes;

  for (let i = last; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zeroes] = 0;
      zeroes--;
      arr[i + zeroes] = 0;
    } else {
      arr[i + zeroes] = arr[i];
    }
  }
  return arr;
};

module.exports = duplicateZeros;
