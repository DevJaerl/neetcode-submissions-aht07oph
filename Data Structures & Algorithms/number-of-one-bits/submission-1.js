class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {

        let bitNumber = n // The only time we shift right with 0 is to convert.
        let count = 0
        //console.log(bitNumber)
        //console.log(bitNumber&1===1)
        while (bitNumber !== 0) {
            //     console.log()
            if ((bitNumber & 1) === 1) { //we MUST check if the and here is actually equal to 1!!
                count++
            }
            bitNumber = bitNumber >>> 1 // we MUST set the before and after values here!!
            //console.log(bitNumber)
        }
        return count
    }
}
