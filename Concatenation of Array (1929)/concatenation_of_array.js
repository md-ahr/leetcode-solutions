/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        arr.push(nums[i]);
    }
    return arr.concat(nums);
};

const result = getConcatenation([1, 2, 1]);

console.log(result);
