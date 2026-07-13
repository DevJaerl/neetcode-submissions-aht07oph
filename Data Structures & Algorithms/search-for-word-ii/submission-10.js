class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     * Approach - Make a trie first then for each letter in the grid dfs search through
     *
     * We need to iterate through the words array while doing dfs on the positions
     *
     */
    findWords(board, words) {
        let trie = new Trie();
        for (let word of words) {
            trie.addWord(word);
        }

        let rows = board.length;
        let cols = board[0].length;
        let foundWords = new Array();
        let visited = new Array(rows).fill().map(() => new Array(cols).fill(0));

        function dfs(node, row, col) {
            if (row == rows || col == cols || row < 0 || col < 0 || visited[row][col] == 1) return;
            //^Here we MUST do the in bounds checks first then we can check the visited array
            let letter = board[row][col];
            if (!node.children.has(letter)) return;
            let nextNode = node.children.get(letter);
            if (nextNode.word) {
                foundWords.push(nextNode.wordValue);
                nextNode.word = false;
            }
            visited[row][col] = 1;
            let neighbors = [
                [row + 1, col],
                [row - 1, col],
                [row, col + 1],
                [row, col - 1],
            ];
            for (let [newRow, newCol] of neighbors) {
                dfs(nextNode, newRow, newCol);
            }
            visited[row][col] = 0;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(trie.root, row, col);
                //This way we start checking from every cell on the board
            }
        }
        return foundWords;
    }
}

class TrieNode {
    constructor() {
        this.word = false;
        this.wordValue = "";
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    addWord(word) {
        let current = this.root;
        for (let letter of word) {
            if (!current.children.has(letter)) current.children.set(letter, new TrieNode());
            current = current.children.get(letter);
        }
        current.word = true;
        current.wordValue = word;
    }
    search(word) {
        let current = this.root;
        for (let letter of word) {
            if (!current.children.has(letter)) return false;
            current = current.children.get(letter);
        }
        return current.word;
    }
}
