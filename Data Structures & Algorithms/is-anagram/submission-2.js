class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        for (let i of s) {
            if (t.includes(i)) {
                s = s.replace(i, "")
                t = t.replace(i, "")
            } else {
                return false
            }
           // console.log(i,s,t)
        }
        if (t || s) {
            return false
        }
        else{
            return true
        }
    }
}
