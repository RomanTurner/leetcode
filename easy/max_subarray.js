function maxSubArray(nums) {
  let currentSubarray = nums[0];
  let maxSubarray = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }
  return maxSubarray;
}
let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test));
