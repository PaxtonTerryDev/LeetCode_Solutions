/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numArray = nums;
  for (let i = 0; i <= numArray.length; i++) {
    for (let j = i + 1; j <= numArray.length; j++) {
      const result = numArray[i] + numArray[j];
      if (result == target) {
        return [i, j];
      }
    }
  }
  return;
};

const nums = [0, 4, 3, 0];
const target = 0;

const result = twoSum(nums, target);
console.log(result);
