class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(string, maxReplacements) {
        let arr = string.split("");
        let L = 0;
        let map = new Map();
        let length = 0;
        let mostCommonLetterCount = 0

        for (let R = 0; R < arr.length; R++) {
            if (!map.has(arr[R])) map.set(arr[R], 0);
            map.set(arr[R], map.get(arr[R]) + 1);
            mostCommonLetterCount = Math.max(mostCommonLetterCount, map.get(arr[R]));
            let currentLength = R - L + 1;

            while (currentLength - mostCommonLetterCount > maxReplacements) {
                map.set(arr[L], map.get(arr[L]) - 1);
                if (map.get(arr[L]) == 0) map.delete(arr[L]);
                L++;
                currentLength = R - L + 1;
            }

            length = Math.max(length, currentLength);
        }
        return length;
    }
}
