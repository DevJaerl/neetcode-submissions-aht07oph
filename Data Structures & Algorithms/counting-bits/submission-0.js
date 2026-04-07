class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let answers = new Array(n+1).fill(0)
        let exponent = 0
                //console.log(1 == 2**exponent)

        for (let i = 1; i < n+1; i++){
            console.log("start",i,exponent)
            if (i == 2**exponent){
                answers[i]= 1
                exponent++
                console.log(i, "if",exponent)
            }else{
                console.log(i, "else",exponent)
                let remainder = i-2**(exponent-1)
                console.log(answers, remainder)
                answers[i]= (answers[remainder]+1)
            }
        }

        return answers
    }
}
