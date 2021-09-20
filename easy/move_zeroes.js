/**
 *. Two Pointers technique
 * Given an integer array nums, move all 0's to the end
 * of it while maintaining the relative order of the non-zero elements.
 ** In Place
 *
 * */ 

var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
};
