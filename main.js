function mazeGenerator(num) {
    const maze = [];
    const max = Math.round(num) - 1;
    for (let i = 0; i <= max; i++) {
        maze.push([]);
        for (let j = 0; j <= max; j++) {
            if (i % 2 === 0) {
                if (i % 4 === 0 && j !== 1) {
                    maze[i].push('@');
                } else if (i % 4 !== 0 && j !== max - 1) {
                    maze[i].push('@');
                } else {
                    maze[i].push(' ');
                };
            } else {
                if (j === 0 || j === max) {
                    maze[i].push('@');
                } else {
                    maze[i].push(' ');
                };
            };
        };
    };
    return maze;
};
console.table(mazeGenerator(15));