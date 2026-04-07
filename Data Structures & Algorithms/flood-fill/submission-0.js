class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let value = image[sr][sc]
        let rowLength = image.length
        let colLength = image[0].length

        function dfs(image, r, c) {
            // Technically we do not need visited as visited notes will have value of color
            if (Math.min(r, c) < 0 || r == rowLength || c == colLength ||
                image[r][c] == color ||
                image[r][c] !== value) {
                //if r or c are negative, or out of bounds, 
                // or we have already visited and colored an item, 
                // or the image color is not the target color
                return
            }

            //reset the color at the current position if the target matches the current color
            image[r][c] = color

            dfs(image, r+1, c)
            dfs(image, r-1, c)
            dfs(image, r, c+1)
            dfs(image, r, c-1)

        }


        dfs(image, sr, sc)
        return image

    }
}
