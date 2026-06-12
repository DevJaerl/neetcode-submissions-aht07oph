class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        this.matrix = matrix;
        this.sumMatrix = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));
        // sumMatrix will be 1-indexed compared to matrix's 0 index
        //aka whenever we reference matrix we need to do i+1, j+1 for BOTH functions

        for (let i = 1; i < this.sumMatrix.length; i++) {
            for (let j = 1; j < this.sumMatrix[0].length; j++) {
                this.sumMatrix[i][j] =
                    this.sumMatrix[i][j - 1] +
                    this.sumMatrix[i - 1][j] -
                    this.sumMatrix[i - 1][j - 1] +
                    this.sumMatrixToMatrixConverter(i, j);
            }
        }
        console.log(this.sumMatrix);
    }

    sumMatrixToMatrixConverter(i, j) {
        if (i < 0 || j < 0) return 0;
        return this.matrix[i - 1][j - 1];
    }

    matrixToSumMatrixConverter(i, j) {
        if (i < 0 || j < 0) return 0;
        return this.sumMatrix[i + 1][j + 1];
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let totalRegion = this.matrixToSumMatrixConverter(row2, col2);
        let firstExtraRegion = this.matrixToSumMatrixConverter(row2, col1 - 1);
        let secondExtraRegion = this.matrixToSumMatrixConverter(row1 - 1, col2);
        let overlapRegion = this.matrixToSumMatrixConverter(row1 - 1, col1 - 1);

        return totalRegion - firstExtraRegion - secondExtraRegion + overlapRegion;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
