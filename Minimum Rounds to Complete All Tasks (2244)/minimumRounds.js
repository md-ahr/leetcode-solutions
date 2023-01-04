/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    let count = 0;
    let counterObj = {};
    const length = tasks.length;
    for (let i = 0; i < length; i++) {
        counterObj[tasks[i]] = (counterObj[tasks[i]] || 0 ) + 1;
    }
    for (let key in counterObj) {
        if (counterObj[key] === 1) return -1;
        count += Math.ceil(counterObj[key] / 3);
    }
    return count;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
