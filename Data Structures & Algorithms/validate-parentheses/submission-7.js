class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length / 2 % 1) {
            return false
        }
        let stack = []

        for (let char of s) {
            if (char == '[' || char == '(' || char == '{') {
                stack.push(char)
                console.log(stack)
            } else {
                if (stack.length == 0 && char) {
                    return false
                }
                let current = stack.pop()
                console.log(current, char)
                if (current == '{' && char !== '}' ||
                    current == '(' && char !== ')' ||
                    current == '[' && char !== ']') {
                    return false
                }
            }
        }
        if (stack.length > 0) {
            return false
        }

        return true
    }
}
