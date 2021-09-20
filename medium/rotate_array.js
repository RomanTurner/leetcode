//Given an array, rotate the array to the right by k steps, where k is non-negative.

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

var rotate = function (nums, k) {
    // In this approach, we firstly reverse all the elements of the array.
    //Then, reversing the first k elements followed by reversing the rest n - kn−k elements
    // gives us the required result.
    let rev = nums.reverse();
    return [...rev.slice(0, k).reverse(), ...rev.slice(k).reverse()];
};
//inplace

// function rotate(nums, k) {
//   k %= nums.length;
//   reverse(nums, 0, nums.length - 1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
//     return nums
// }

// function reverse(nums, start, end) {
//   while (start < end) {
//     let temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//   }
// return nums
// }

console.log(rotate(nums, k));