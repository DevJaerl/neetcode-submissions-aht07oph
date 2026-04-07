class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * [1,2,3,4,5]
     * [0,1,2,3,4]
     */
    maxProfit(prices) {
        let currentMax = 0
        let minSoFar = 0
        let difference = 0

        if (prices.length <= 1) {
            return difference
        }

            //store first value
        minSoFar = prices[0]

        for (let i = 0; i < prices.length; i++) {
            let currentValue = prices[i]

            // if next number in range between min and max, continue
            if (minSoFar<=currentValue && currentValue<=currentMax) {
                console.log("1", minSoFar, currentMax, difference)

            }

            // if next number is bigger than current max,
            if (currentValue> currentMax){
            // store difference between math.max(diff, currMax-currMin)
                currentMax = currentValue
                console.log("2", "current", currentValue,"max" ,currentMax)
                difference =  Math.max(difference, currentMax-minSoFar)
            }

            // if next number is smaller than currentMin,
            if (currentValue<minSoFar){
            //store current as currentMin, set currMax back to 0
                minSoFar = currentValue
                currentMax = 0
                                console.log("3", "current", currentValue,"max" ,currentMax)

            }   
        }

        return difference
    }
}
