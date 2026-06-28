class Solution {
    /**
     * @param {number} k -> total number of operations/projects
     * @param {number} w -> does not decrease on starting new projects. persists from start to end.
     * @param {number[]} profits -> max heap 
     * @param {number[]} capital -> min heap
     * @return {number} -> w at the end
     * We know the profits and capital arrays are the same length
     * We are using queues so the functions are ENQUEUE(), DEQUEUE(), front(), size(), isEmpty()
     */
    findMaximizedCapital(k, w, profits, capital) {
        let maxProfits = new PriorityQueue((a,b)=>b-a)
        let minCapital = new PriorityQueue(([a,c],[b,d])=> a-b)

        for (let i=0; i<capital.length; i++){
            minCapital.enqueue([capital[i], profits[i]])
        }

        for (let i=0; i<k; i++){
            while (!minCapital.isEmpty()
            && minCapital.front()[0] <= w){
                maxProfits.enqueue(minCapital.dequeue()[1])
                //Here we put everything we can afford to do at this step into the maxProfits heap
                // We then select the best item to do later.
            }

            if (maxProfits.isEmpty()) break

            w += maxProfits.dequeue()
        }

        return w
    }
}
