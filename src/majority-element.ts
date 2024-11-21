function majorityElement(nums: number[]): number {
  const countMap: Record<number, number> = {};
  const elements: number[] = [];

  nums.forEach((num) => {
    if (countMap[num] === undefined) {
      countMap[num] = 1;
      elements.push(num);
    } else {
      countMap[num] = countMap[num] + 1;
    }
  });

  //   console.log(countMap);
  //   console.log(elements);
  //   console.log(getHighestCount(countMap, elements));
  return getHighestCount(countMap, elements);
}

function getHighestCount(
  countMap: Record<number, number>,
  elements: number[]
): number {
  let highestVal: number = elements[0];

  elements.forEach((num, index) => {
    if (index === 0) return;
    const val = countMap[num];
    const compare = countMap[highestVal];
    if (val > compare) highestVal = num;
  });

  return highestVal;
}

const test1 = [3, 2, 3];
const test2 = [2, 2, 1, 1, 1, 2, 2];
const test3 = [6, 5, 5];

majorityElement(test1);
majorityElement(test2);
majorityElement(test3);

