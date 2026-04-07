class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = new Map()
        let visited = new Set()

        //First we need to build the adjacency list mapping from prereq to course aka prereq to course
        for (let [course, prereq] of prerequisites) {
            if (!adjList.has(course)) {
                adjList.set(course, []) // Putting the neighbor in an array in the adj list Automatically
            }

            if (!adjList.has(prereq)) {
                adjList.set(prereq, [])
            }
            adjList.get(course).push(prereq)
        }

        function dfs(currentClass) {
            if (visited.has(currentClass)) return false
            if (adjList.get(currentClass).length === 0) return true
            // This means the prereqs for this class were already cleared

            visited.add(currentClass)

            if (adjList.has(currentClass)) {
                for (let classBefore of adjList.get(currentClass)) {
                    if (!dfs(classBefore)) return false
                }
            }
            visited.delete(currentClass)
            adjList.set(currentClass,[]) 
            return true
        }

        for (let key of adjList.keys()) {
            if (!dfs(key)) return false
        }

        return true
    }
}
