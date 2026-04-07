class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let answer = []
        let map = new Map()

        map.set(nums[0], 0)

        for (let i=1; i<nums.length; i++){
            let testNumber = target-nums[i] //If the current number adds to target rephrased
            if (map.has(testNumber)){
                return [map.get(testNumber), i]
            }//If the current number and the compliment exist return them 
            //with the position of the number that existed in the map first

            if (map.has(nums[i])) continue

            map.set(nums[i], i) //This adds the current number and position as the key/value to the map

        }

        return answer
    }
}
