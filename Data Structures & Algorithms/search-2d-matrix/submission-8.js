class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let low = 0
        let high = matrix.length - 1
        let width = matrix[0].length-1
        if (target < matrix[low][0] || target > matrix[high][width]) {
            return false
        }

        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (target < matrix[mid][0]) {
                high = mid - 1
            } else if (mid + 1 <= high && target >= matrix[mid + 1][0]) {
                low = mid+1
            } else {
                let row = matrix[mid]
                return this.searchRow(row, target)
            }
        }
        return false
    }

    searchRow(row, target) {
        let left = 0
        let right = row.length-1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (row[mid] == target) {
                return true
            }
            else if (row[mid] > target) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        return false
    }
}
