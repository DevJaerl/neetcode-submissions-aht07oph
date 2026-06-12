class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = new LocalStack();

        for (let item of operations) {
            if (item == "D") {
                let number = record.peek() * 2;
                record.push(number);
            } else if (item == "C") {
                record.pop();
            } else if (item == "+") {
                let number = record.peek() + record.peekTwo();
                record.push(number);
            } else {
                let number = Number(item);
                record.push(number);
            }
        }

        return record.count();
    }
}

class LocalStack {
    constructor() {
        this.arr = [];
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }

    peekTwo() {
        return this.arr[this.arr.length - 2];
    }

    pop() {
        if (this.arr.length > -1) this.arr.pop();
    }

    push(val) {
        this.arr.push(val);
    }

    count() {
        let total = 0;
        for (let item of this.arr) {
            total += item;
        }
        return total;
    }
}
