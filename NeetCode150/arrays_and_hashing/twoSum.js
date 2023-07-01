// https://leetcode.com/problems/two-sum/

export default function twoSum(nums, target) {
  const valueToIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const complementValue = target - currentValue;

    if (valueToIndexMap.has(complementValue)) {
      const complementIndex = valueToIndexMap.get(complementValue);
      return [i, complementIndex];
    }

    valueToIndexMap.set(currentValue, i);
  }

  return undefined;
}
