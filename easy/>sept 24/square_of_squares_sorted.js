/**
 * Given an integer array nums sorted in non-decreasing order,
 *  return an array of the squares of each number sorted in non-decreasing order.
 * 
 * 
*/

//*Two pointers 
var sortedSquares = function (nums) {
  let len = nums.length;
  let result = [];
  let left = 0;
  let right = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      square = nums[left];
      left++;
    } else {
      square = nums[right];
      right--;
    }
    result[i] = square * square;
  }
  return result;
};