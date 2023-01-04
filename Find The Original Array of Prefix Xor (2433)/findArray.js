/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let arr = [];
    const length = pref.length;
    for (let i = 0; i < length; i++) {
        arr[i] = pref[i - 1] ^ pref[i];
    }
    return arr;
};

console.log(findArray([5, 2, 0, 3, 1]));
