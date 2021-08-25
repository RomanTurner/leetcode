/* 
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the smallest sorted list of ranges that cover every missing number exactly.
That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
*/

const findMissingRanges = (nums, lower, upper) => {
  function formatRange(lower, upper) {
    return lower == upper ? `${lower}` : `${lower}->${upper}`;
  }

  const result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.; i++) {
    let current = i < nums.length ? nums[i] : upper + 1;
    if (prev + 1 <= current - 1) {
      result.push(formatRange(prev + 1, current - 1));
    }
    prev = current;
  }

  return result;
};
