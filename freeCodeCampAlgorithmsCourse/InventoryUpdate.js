// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(curInv, newInv) {
  newInv.forEach((newItem) => {
    if (!hasItem(curInv, newItem)) {
      curInv.push(newItem);
    } else {
      //if hasItem returns true
      curInv[findIndex(curInv, newItem)][0] += newItem[0];
    }
  });
  return sortInventoryAlphabetically(curInv);
}

function hasItem(array, item) {
  const arrTest = array.filter((arrayItem) => arrayItem[1] === item[1]);
  return arrTest.length > 0;
}

function findIndex(array, item) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i][1] === item[1]) {
      return i;
    }
  }
}

function sortInventoryAlphabetically(curInv) {
  return curInv.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  });
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

// console.log(findIndex(curInv, [21, "Bowling Ball"]));
const answer = updateInventory(curInv, newInv);
console.log(answer);
