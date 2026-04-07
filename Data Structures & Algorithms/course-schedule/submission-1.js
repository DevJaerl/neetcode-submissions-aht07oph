class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = {}
        let visited = new Set()

        //First we need to build the adjacency list mapping from prereq to course aka prereq to course
        for (let [course, prereq] of prerequisites) {
            if (!adjList[course]) {
                adjList[course] = [prereq] // Putting the neighbor in an array in the adj list Automatically
            } else {
                adjList[course].push(prereq)
            }
            if (!adjList[prereq]) {
                adjList[prereq] = []
            }
        }

        function dfs(currentClass) {
            if (visited.has(currentClass)) return false
            if (!adjList[currentClass] || adjList[currentClass].length === 0) return true
            // This means the prereqs for this class were already cleared

            visited.add(currentClass)

            if (adjList[currentClass]) {
                for (let classBefore of adjList[currentClass]) {
                    if (!dfs(classBefore)) return false
                }
            }
            visited.delete(currentClass)
            adjList[currentClass] = []
            return true
        }

        for (let key in adjList) {
            if (!dfs(key)) return false
        }

        return true
    }
}
