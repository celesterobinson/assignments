// var grid = []

// for (var i = 0; i < 3; i++) {
//     grid.push([]);
//     for (var j = 0; j < 3; j++) {
//         grid[i].push(0);
//     }
// }

// console.log(grid);

// for (var i = 0; i < 3; i++) {
//     grid.push([]);
//     for(var j = 0; j < 3; j++) {
//         grid[i].push(i);
//     }
// }

// console.log(grid);

// for (var i = 0; i < 3; i++) {
//     grid.push([]);
//     for(var j = 0; j < 3; j++) {
//         grid[i].push(j);
//     }
// }

// console.log(grid);

var grid = [[0, 1, 2], 
            [0, 1, 2], 
            [0, 1, 2]];

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        grid[i][j] = 'x';
    }
}

console.log(grid);