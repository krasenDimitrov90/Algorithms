class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// The Queue is FIFO - first in first out
 
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // 1 2 3 4 5
    // The enqueue AND dequeue is like push() and shift() in array
    // Becouse for pushing we only need to know the last node,
    // and for shifting we only need to know the first node.
    // That way we are not required to travers the whole queue
    
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return undefined;

        let popedNode = this.first;
        this.first = popedNode.next;

        this.size--;
        if (this.size <= 1) this.last = null;
        
        return popedNode;
    }
}