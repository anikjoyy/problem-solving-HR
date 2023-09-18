/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  const n = nums.length;
  for (let count = 1; count <= n - 1; count++) {
    let flag = 0;
    for (let j = 0; j <= n - 2; j++) {
      if (nums[j] < nums[j + 1]) {
        //decending order
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = 1;
      }
    }
    if (flag === 0) {
      break;
    }
  }

  // Find the second largest number
  let largest = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] !== largest) {
      return nums[i];
    }
  }
  return undefined;
}

function main() {
  const n = +readLine();
  const nums = readLine().split(' ').map(Number);

  console.log(getSecondLargest(nums));
}
