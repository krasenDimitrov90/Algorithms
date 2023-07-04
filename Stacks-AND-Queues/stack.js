class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// The Stack is LIFO - last in, first out

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // 5  4  3  2  1

    // Implementig push() and pop() to be like unshift() and shift() in array
    // That way we don't need to travers all nodes in the stack when
    // using any of this methods, all we need to know is the first node
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    pop() {
        if (!this.first) return undefined;
        
        let popedNode = this.first;
        this.first = popedNode.next;
        popedNode.next = null;

        this.size--;
        if (this.size <= 1) this.last = null;

        return popedNode;
    }
}