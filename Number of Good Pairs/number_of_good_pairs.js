/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = 1; j < length; j++) {
            if ((i < j) && (nums[i] === nums[j])) {
                count++;
            }
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
