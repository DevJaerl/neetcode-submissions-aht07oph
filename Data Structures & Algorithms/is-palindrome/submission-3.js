class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replace(/[^A-Za-z0-9]/g, '')

        cleanString = cleanString.toLowerCase()


        // implement two pointers here from the outsides. Easier to deal with than the for loop.
        let middle = Math.floor((cleanString.length) / 2)
        let left = 0
        let right = cleanString.length-1


        while (right>=left){
            if (cleanString[right] !==cleanString[left]){
                return false
            }
            right --
            left ++
        }

        return true

        // let left = Math.floor((cleanString.length-1) / 2)
        // let right

        // if ((cleanString.length %2) == 0){
        //     right = (left+1)
        // }else{
        //     right = middle
        // }
       
        // console.log(cleanString.length)
        // console.log(middle,left,right)

        // for (let i = 1; i < middle; i++) {
        //     console.log(left,right)
        //     console.log(cleanString[left],cleanString[right])
        //     if (cleanString[left] !== cleanString[right]) {
        //         return false
        //     }
        //     left= left --
        //     right = right ++
        // }
        //return true
    }
}
