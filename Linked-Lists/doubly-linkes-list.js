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
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
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
// doublyLinkedList.push(3);
console.log(doublyLinkedList.pop());

doublyLinkedList.printList();