/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        // Sort The Arrays
       intervals = intervals.sort((a,b)=>{return a.start-b.start})
        console.log(intervals)

        let meetingsAccepted = [intervals[0]]
        // Compare Array start and end times
        for (let i=1; i<intervals.length; i++){
                console.log (intervals[i].start)
                console.log(intervals[i-1].end)
            if(intervals[i].start>=intervals[i-1].end){
                meetingsAccepted.push(i)
            }else{
                return false // if there is an overlap
            }
        }
        // Return answer
        console.log(meetingsAccepted)
        return true // if we complete all comparisons.
    }
}
