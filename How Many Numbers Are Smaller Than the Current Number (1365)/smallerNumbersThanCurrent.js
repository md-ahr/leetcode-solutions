/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let arr = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        let count = 0;
        for (let j = 0; j < length; j++) {
            if (j !== i && nums[j] < nums[i]) {
               count++;
            }
        }
        arr.push(count);
    }
    return arr;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
