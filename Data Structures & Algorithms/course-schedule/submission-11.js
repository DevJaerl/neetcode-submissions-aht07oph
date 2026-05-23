class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = new Map()
        let visited = new Set()

        for (let [item, preReq] of prerequisites){
            if (!adjList.has(item)){
                adjList.set(item,[])
            }
            adjList.get(item).push(preReq)
            if(!adjList.has(preReq)){
                adjList.set(preReq,[])
            }
        }

        function dfs(course){
            if (visited.has(course))return false
            let preReqs = adjList.get(course)
            if (!preReqs||preReqs.length==0) return true

            visited.add(course)

            for(let preReq of preReqs){
                if (!dfs(preReq)) return false
            }

            visited.delete(course)
            adjList.set(course,[])
            return true
        }

        for (let i=0; i<numCourses; i++){
            if (!dfs(i)) return false
        }
        return true
    }
}
