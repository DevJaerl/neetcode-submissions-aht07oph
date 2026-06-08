class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if (arr.length == 1) return 1;
        if (arr.length == 2 && !(arr[0] == arr[1])) return 2;

        let length = 1;
        let L = 0;
        let direction = "";

        for (let R = 1; R < arr.length; R++) {
            let currentDirection = "";
            if (arr[R - 1]<arr[R]) {
               currentDirection = "^"
            } else if (arr[R - 1]>arr[R]) {
                currentDirection = "v"
            } else {
               currentDirection = "="
               L = R
            }

            console.log(direction, currentDirection)
            if (direction == currentDirection){ L = R-1}

            !(currentDirection=="=")? direction = currentDirection : direction = ""
            length = Math.max(R - L+1, length);
        }
        return length;
    }
}
