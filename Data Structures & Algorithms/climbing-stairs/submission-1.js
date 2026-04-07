class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     let answer = [0,1,2]
    //     if (n == 1) {
    //         return answer[1]
    //     } else if (n == 2) {
    //         return answer[2]
    //     }else{
    //         answer.push(answer[n-1]+answer[-2])
    //         return answer[n-1]+answer[-2]
    //     }
    // }

    climbStairs(n){
        let one = 1
        let two = 2

        if (n==1) return one;
        if (n==2) return two;

        let array = [0,1,2];

        for(let i=3; i<=n; i++){
            array[i]=array[i-1]+array[i-2]
        }
        return array[n]
    }
}
