class Solution {
    /**
     * @param {number[]} seats
     * @param {number[]} students
     * @return {number}
     */
    minMovesToSeat(seats, students) {
        students = students.sort((a,b)=> a-b)
        seats = seats.sort((a,b)=>a-b)
        let count = 0

        for (let i = 0; i<seats.length; i++){
           count += Math.abs (seats[i]-students[i])
        }
        return count
    }
}
