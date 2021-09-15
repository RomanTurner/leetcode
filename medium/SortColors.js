const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

const sortColors = function (nums) {
  let end = nums.length - 1;
  let start = 0;

  for (let i = 0; i <= end; i++) {
    if (nums[i] == 0) {
      swap(nums, i, start);
      start++;
    } else if (nums[i] == 2) {
      swap(nums, i, end);
      end--;
      i--;
    }
  }
};
