class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let answer = [[]]
        for (let item of nums){
            let oneStepCloser = []
            for (let subArray of answer){
                for (let i = 0; i<subArray.length+1; i++){
                    let builderArray = [...subArray]
                    builderArray.splice(i,0,item) // splice(position, delete, add)
                    oneStepCloser.push(builderArray)
                }
            }
            answer = oneStepCloser
        }
        return answer
    }
}
