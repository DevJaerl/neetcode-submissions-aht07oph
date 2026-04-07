/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} arr
     * @returns {Pair[][]}
     */
    insertionSort(arr) {
        let answerArray = []
        if (arr.length == 0) { return answerArray }
        answerArray.push([...arr])
        for (let i = 1; i < arr.length; i++) {
            let j = i - 1 // Resetting this tied to i with the start of every loop
            console.log(arr[j + 1].key, arr[j].key)
            while (j >= 0 && arr[j + 1].key < arr[j].key) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                j-- //Decrementing this potentially through 0 to continue swapping the values lower.
            }
            answerArray.push([...arr])
        }
        return answerArray
    }
}
