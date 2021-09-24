var validMountainArray = function (arr) {
  let len = arr.length - 1;
  if (len < 2) return false;
  let i = 0;
  while (arr[i] < arr[i + 1] && i < len) i++;
  if (i === len || i === 0) return false;
  while (arr[i] > arr[i + 1] && i !== len) i++;
  return i === len;
};

const a = [2, 1];
const b = [3, 5, 5, 7];
const c = [0, 3, 2, 1];
console.log(validMountainArray(c));
module.exports = validMountainArray;
