function modifyMatrix(matrix) {
    for (let i = 0; i < 5; i++) {
        if (matrix[i][i] < 0) {
            matrix[i][i] = 0;
        } else if (matrix[i][i] > 0) {
            matrix[i][i] = 1;
        }
    }
    return matrix;
}

let matrix = [
    [-1, 2, 3, 4, 5],
    [6, 7, 8, -9, 10],
    [11, 12, -13, 14, 15],
    [16, 17, -18, 19, 20],
    [21, 22, 23, 24, -25]
];

console.log(modifyMatrix(matrix));
