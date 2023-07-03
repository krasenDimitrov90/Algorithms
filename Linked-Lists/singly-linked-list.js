class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(item) {
        let newNode = new Node(item);
        this.length = this.length + 1;
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unShift(val) {
        let newNode = new Node(val);
        this.length++;
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    get(idx) {
        if (this.length === 0) return undefined;
        let count = 0;
        let currentNode = this.head;
        while (currentNode && count <= idx) {
            if (count === idx) {
                return currentNode;
            }
            currentNode = currentNode.next;
            count++;
        }
        return undefined;
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        let newNode = new Node(val);
        if (idx === this.length) {
            this.push(newNode);
            return true;
        } else if (idx === 0) {
            this.unShift(newNode);
            return true;
        }

        if (idx > this.length) return false;

        let foundNode = this.get(idx - 1);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++;
        return true;
    }

    remove(idx) {
        
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift(); 

        let prevNode = this.get(idx - 1);
        let nodeToRemove = prevNode.next
        prevNode.next = nodeToRemove.next;
        this.length--;

        return nodeToRemove;
    }

    reverse() {
        //     1      2         3           4     5
        // prevNode        forwardNode           tail
        //     5  2 3 4  1
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = node.next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
        console.log('\n');
    }
}

const linkedList = new LinkedList();
linkedList.push('Hi');
linkedList.push('there');
linkedList.push('how');

linkedList.printList();

linkedList.reverse();
linkedList.printList();

// linkedList.insert(1, 'Test');
// linkedList.printList();

// linkedList.remove(5);
// linkedList.printList();
