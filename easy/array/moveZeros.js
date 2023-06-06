/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order 
 * of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.
 * 
 */
const numbers = [0, 1, 0, 3, 12];
[1, 3, 12, 0, 0];
k = 2;
i = 4;

var moveZeroes = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[i] !== nums[k]) {
        [nums[i], nums[k]] = [nums[k], nums[i]];
        k++;
      }
    }
  }
  return nums;
};

console.log(moveZeroes(numbers));
