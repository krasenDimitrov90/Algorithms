// We use binary-heap , for implementing a priority queue.
// Here we use Min Binary Heap, that means that lower numbers
// has higher priority

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insert(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let idx = this.values.length - 1;

        let bubbleUp = (node, idx) => {
            let priority = node.priority;
            let parentIdx = Math.floor((idx - 1) / 2);
            if (parentIdx >= 0 && this.values[parentIdx].priority > priority) {
                this.values[idx] = this.values[parentIdx];
                this.values[parentIdx] = node;
                bubbleUp(node, parentIdx);
            }
        };

        bubbleUp(newNode, idx);
    }

    extractHighPriority() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();
        let highPriorityNode = this.values[0];

        let last = this.values.pop();
        this.values[0] = last;
        let parentIdx = 0;

        let bubbleDown = (parentIdx) => {
            let leftChildIdx = (2 * parentIdx) + 1;
            let rightChildIdx = (2 * parentIdx) + 2;
            let length = this.values.length;
            let highPriorityChildIdx = null;

            if (leftChildIdx < length && rightChildIdx < length) {
                highPriorityChildIdx = this.values[leftChildIdx].priority < this.values[rightChildIdx].priority
                    ? leftChildIdx
                    : rightChildIdx;
            } else if (leftChildIdx < length) {
                highPriorityChildIdx = leftChildIdx;
            }
            if (highPriorityChildIdx && this.values[highPriorityChildIdx].priority < this.values[parentIdx].priority) {
                [this.values[parentIdx], this.values[highPriorityChildIdx]] = [this.values[highPriorityChildIdx], this.values[parentIdx]];
                bubbleDown(highPriorityChildIdx);
            }
        };

        bubbleDown(parentIdx);

        return highPriorityNode;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.insert('first', 5);
priorityQueue.insert('second', 4);
priorityQueue.insert('third', 3);
priorityQueue.insert('fourth', 2);
priorityQueue.insert('fifth', 1);

console.log(priorityQueue);

console.log(priorityQueue.extractHighPriority());
console.log(priorityQueue.extractHighPriority());
console.log(priorityQueue.extractHighPriority());
console.log(priorityQueue.extractHighPriority());
console.log(priorityQueue.extractHighPriority());