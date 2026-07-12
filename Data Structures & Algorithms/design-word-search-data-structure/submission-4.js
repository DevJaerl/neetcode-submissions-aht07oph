class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for (let letter of word) {
            if (!current.children.has(letter)) current.children.set(letter, new TrieNode());
            current = current.children.get(letter);
        }
        current.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node, index) {
            if (index == word.length) return node.word;
            let letter = word[index] // Instead of a for loop, writing it directly into the function here!
            if (letter == ".") {
                for (let child of node.children.values()) { // Syntax for getting and iterating through children
                    if(dfs(child, index + 1))return true
                }
                return false // if none of the above cases return true
            } else {
                if (!node.children.has(letter)) return false;
                let current = node.children.get(letter); // NEED a new variable here!
                return dfs(current, index + 1); // always need return statements for recursion!
            }
        }
        return dfs(this.root, 0); // Again need to return whatever we get from calling the inner function!
    }
}

class TrieNode {
    constructor() {
        this.word = false;
        this.children = new Map();
    }
}
