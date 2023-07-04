class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return newNode;
    }

    pop() {
        if (!this.head) return undefined;

        let popedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }

        this.length--;
        return popedNode;
    }

    shift() {
        if (!this.head) return undefined;
        if (this.length === 1) return this.pop();

        let shiftedNode = this.head;
        this.head = shiftedNode.next;
        this.head.prev = null;

        shiftedNode.next = null;

        this.length--;
        return shiftedNode;
    }

    unShift(val) {
        if (this.length === 0) return this.push(val);

        let newNode = new Node(val);

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return newNode;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = null;
        if (idx <= this.length / 2) {
            current = this.head;
            while (idx > 0) {
                current = current.next;
                idx--;
            }
        } else {
            current = this.tail;
            while (idx < this.length - 1) {
                current = current.prev;
                idx++;
            }
        }

        return current;
    }

    set(idx, val) {
        let foundedNode = this.get(idx);

        if (foundedNode) {
            foundedNode.val = val;
            return true;
        }

        return false;
    }

    insert(idx, val) {
        // The "!!" operator transform the result to boolean
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unShift(val);
        if (idx > this.length || idx < 0) return false;

        let newNode = new Node(val);
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let foundedNode = this.get(idx - 1);
        let removedNode = foundedNode.next;
        let afterNextNode = removedNode.next;
        foundedNode.next = foundedNode.next.next;
        afterNextNode.prev = foundedNode;

        this.length--;
        removedNode.next = null;
        removedNode.prev = null;
        return removedNode;
    }

    printList() {
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current);
            current = current.next;
        }
        console.log(arr);
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
console.log(doublyLinkedList.unShift(4));

console.log(doublyLinkedList.remove(3));

console.log(doublyLinkedList.get(0))
console.log(doublyLinkedList.get(1))
console.log(doublyLinkedList.get(2))
console.log(doublyLinkedList.get(3))
console.log(doublyLinkedList.get(4))

doublyLinkedList.printList();