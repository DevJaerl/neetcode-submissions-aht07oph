class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1
        let high = Math.max(...piles)
        let answer = high

        while (low <= high) {
            let hourCount = 0
            let mid = Math.floor((low + high) / 2)

            for (let item of piles) {
                hourCount += Math.ceil(item / mid) // MID is the current testbench number!!
            }
            console.log(hourCount)

            if (hourCount <= h) {
                answer = Math.min(answer, mid)
                high = mid-1
            } else {
                low = mid + 1
                
            }

        }
        return answer
    }
}
