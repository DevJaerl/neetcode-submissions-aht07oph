class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {

    //     let answer = []
    //     let map = {}

    //     if (strs.length ==1){
    //         return [strs]
    //     }

    //     for (let string of strs){
    //         let current;
    //         if (current in map){
    //             map[current]+= string
    //         }else{
    //             map[current]= string
    //         }
    //     }
    //         for (key in map){
    //         answer.push(map[key])
    //         }

    //     return answer
    // }

    groupAnagrams(strs) {
        let answer = []
        if (strs.length == 1) {
            return [strs]
        }
        let dictionary = {}
        for (let i in strs) {
            let wordMap = new Array(26).fill(0)

            for (let number in strs[i]) {
                wordMap[strs[i].charCodeAt(number) - 'a'.charCodeAt(0)]++;
            }

            //console.log(dictionary)
            let currentMap = dictionary[wordMap]
            if (dictionary.hasOwnProperty(wordMap)) {
                currentMap.push([strs[i]])
            } else {
                let array = []
                array.push([strs[i]])
                dictionary[wordMap] = array
            }
        }

        for (let key in dictionary)
        answer.push(Object.values(dictionary[key]))
        console.log(answer)
        return answer
    }

}






















