/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    const length   = operations.length;
    for (let i = 0; i < length; i++) {
        operations[i][0] === '+' || operations[i][2] === '+' ? X++ : X--;
    }
    return X;
};

const result = finalValueAfterOperations(['--X','X++','X++']);

console.log(result);
