/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let rows = [];
    let cols = [];
    const gridLength = grid.length;
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            rows[i] = Math.max(rows[i] || -Infinity, grid[i][j]);
            cols[j] = Math.max(cols[j] || -Infinity, grid[i][j]);
        }
    }
    let sum = 0;
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            sum += Math.min(rows[i], cols[j]) - grid[i][j];
        }
    }
    return sum;
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));
