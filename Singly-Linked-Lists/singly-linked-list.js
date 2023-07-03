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
        if (this.length <= 1) {
            this.length = 0;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current) {
                if (current.next === this.tail) {
                    current.next = null;
                    this.tail = current;
                    this.length--;
                    break;
                }
                current = current.next;
            }
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log({ current: current?.val, next: current?.next?.val })
            current = current.next;
            if (!current) break;
        }
    }
}

const linkedList = new LinkedList();
linkedList.push('Hi');
linkedList.push('there');
linkedList.push('how');

linkedList.printList();
linkedList.pop();
console.log('\n')
linkedList.printList();

linkedList.pop();
console.log('\n')
linkedList.printList();

linkedList.pop();
console.log('\n')
linkedList.printList();