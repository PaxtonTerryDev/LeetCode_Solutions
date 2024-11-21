function removeDuplicatesWithLookupTable(nums: number[]): number {
  const map: Record<number, number> = {};
  let i = 0;
  while (i < nums.length) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}

function removeDuplicates(nums: number[]): number {
  // get the first value of the array, set it as the target.  iterate through array, if array[i] === target, remove.
  let ref: number = nums[0];
  let i = 1;
  while (i < nums.length) {
    if (nums[i] === ref) nums.splice(i, 1);
    else {
      ref = nums[i];
      i++;
    }
  }
  console.log(nums);
  return nums.length;
}

function removeDuplicatesAfterTwoEntries(nums: number[]): number {
  const map: Record<number, number> = {};
  let i = 0;
  while (i < nums.length) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
      i++;
    } else if (map[nums[i]] < 2) {
      map[nums[i]] = map[nums[i]] + 1;
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  //   console.log(map);
  //   console.log(nums);
  return nums.length;
}

const test1 = [1, 1, 3];
const test2 = [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4];
const test3: number[] = [];

removeDuplicatesAfterTwoEntries(test1);
removeDuplicatesAfterTwoEntries(test2);
removeDuplicatesAfterTwoEntries(test3);
const num = 0;
export default num;

