var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;
  while (i >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
  return nums1;
};
let x = [1, 2, 3, 0, 0, 0];
let y = [2, 5, 6];
console.log(merge(x, 3, y, 3));
console.log(merge([0], 0, [1], 1));

