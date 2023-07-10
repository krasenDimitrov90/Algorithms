class BinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val);
        let idx = this.values.length - 1;

        let bubbleUp = (val, idx) => {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[parentIdx] < val) {
                this.values[idx] = this.values[parentIdx];
                this.values[parentIdx] = val;
                bubbleUp(val, parentIdx);
            }
        };

        bubbleUp(val, idx);
    }

    // [200, 55, 41, 39, 45, 12, 33, 1, 18, 27]
    extraxtMax() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();
        let max = this.values[0];

        let last = this.values.pop();
        this.values[0] = last;
        let parentIdx = 0;

        let bubbleDown = (parentIdx) => {
            let leftChildIdx = (2 * parentIdx) + 1;
            let rightChildIdx = (2 * parentIdx) + 2;
            let length = this.values.length;
            let largerChildIdx = null;

            if (leftChildIdx < length && rightChildIdx < length) {
                largerChildIdx = this.values[leftChildIdx] > this.values[rightChildIdx]
                    ? leftChildIdx
                    : rightChildIdx;
            } else if (leftChildIdx < length) {
                largerChildIdx = leftChildIdx;
            }
            if (largerChildIdx && this.values[largerChildIdx] > this.values[parentIdx]) {
                [this.values[parentIdx], this.values[largerChildIdx]] = [this.values[largerChildIdx], this.values[parentIdx]];
                bubbleDown(largerChildIdx);
            }
        };

        bubbleDown(parentIdx);

        return max;
    }
}

// [18, 12]

let heap = new BinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
heap.insert(55);
// heap.insert(1);
// heap.insert(45);
// heap.insert(200);
console.log(heap.values);

console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);
console.log(heap.extraxtMax(), heap.values);

