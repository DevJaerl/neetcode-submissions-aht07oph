class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = s.replace(/[^A-Za-z0-9]/g,'') // Remove anything that is not a letter or number from string
        let L=0, R=cleanString.length-1


        while (L<R){
            if (cleanString.charAt(L).toLowerCase()!= cleanString.charAt(R).toLowerCase()) return false
            L++
            R--
        }
        return true
    }
}
