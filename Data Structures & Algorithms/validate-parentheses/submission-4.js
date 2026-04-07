class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let boolean = true

        if (s.length/2% 1){
            boolean = false
            return boolean
        }

        for (let item of s) {
            if (item == "{" | item == "(" | item == "[") {
                stack.push(item)
            } else {
                let comparison = stack.pop()
                console.log(comparison == "{" && item == "}")
                console.log(comparison == "(" && item == ")")
                console.log(comparison == "[" && item == "]")

                if (comparison == "{" && item == "}" || comparison == "(" && item == ")" || comparison == "["
                    && item == "]"
                ) {
                    continue
                } else {
                    boolean = false
                }
            }
        }


        return (boolean && stack.length == 0)
    }
}
