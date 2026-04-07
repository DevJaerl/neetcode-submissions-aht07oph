class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * //smap
        //tmap
        // map letters into each 
        // see if set object.entries == each other.
        // if so return true
     */
    isAnagram(s, t) {
        let sMap = new Map()
        let tMap = new Map()

        function mapper(arr, map) {
            for (let i = 0; i < arr.length; i++) {
                if (map.has(arr[i])) {
                    map.set(arr[i], map.get(arr[i]) + 1)
                    continue
                }
                map.set(arr[i], 1)
            }
        }

        mapper(s, sMap)
        mapper(t, tMap)

        if (sMap.size == tMap.size) {
            for (let [key, value] of sMap.entries()) {
                if (tMap.get(key) !== value) {
                    return false
                }
            }
            return true
        }
        return false
    }
}
