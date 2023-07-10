class BinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(val) {
        this.values.push(val);
        let idx = this.values.length - 1;

        let bubbleUp = (val, idx) => {
            let parrentIdx = Math.floor((idx - 1) / 2);
            if (this.values[parrentIdx] < val) {
                this.values[idx] = this.values[parrentIdx];
                this.values[parrentIdx] = val;
                bubbleUp(val, parrentIdx);
            }
        };

        bubbleUp(val, idx);
    }

    // [200, 55, 41, 39, 45, 12, 33, 1, 18, 27]
    extraxtMax() {
        let root = this.values[0];
        let last = this.values.pop();
        this.values[0] = last;

        let bubbleDown = () => {
            
        };
    }
}

let heap = new BinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(200);
console.log(heap.values);