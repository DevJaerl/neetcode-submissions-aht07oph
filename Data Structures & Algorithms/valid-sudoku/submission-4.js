class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // [1, 2,1 ]
        // [2,1,1]
        // row, column, box

        let row = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }
        let col = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }
        let box = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }

        for (let i =0 ; i < board.length; i++) {
            for (let j =0 ; j < board[0].length; j++) {
                let value = board[i][j] //Value is a number aka key
                if (value == "."){
                   // console.log("continue")
                    continue
                }

               let valueBox = this.box(i,j)

               //Check if value is in current row, col, box
               //If not, add to row, col, box
               //If so, return false

                if (row[value].includes(i) || col[value].includes(j)
                || box[value].includes(valueBox)
                ){
                console.log(value, i, j, valueBox)    
                console.log(row, col, box)
                    return false
                }
                
                console.log(value, i, j, valueBox)
                // console.log(box[value])
                row[value].push(i)
                col[value].push(j)
                box[value].push(valueBox)
            }
        }
       return true
    }

     box(row, col) {
       // console.log("value-box-function",row, col)
        if (row > -1 && row <3 && col > -1 && col <3) {
            return 1
        }
        if (row > 2 && row < 6 && col > -1 && col <3) {
            return 2
        }
        if (row > 5 && row < 9 && col > -1 && col <3) {
            return 3
        }
        if (row > -1 && row <3 && col > 2 && col < 6) {
            return 4
        }
        if (row > 2 && row < 6 && col > 2 && col < 6) {
            return 5
        }
        if (row > 5 && row < 9 && col > 2 && col < 6) {
            return 6
        } if (row > -1 && row <3 && col > 5 && col < 9) {
            return 7
        }
        if (row > 2 && row < 6 && col > 5 && col < 9) {
            return 8
        }
        if (row > 5 && row < 9 && col > 5 && col < 9) {
            return 9
        }
    }
}
