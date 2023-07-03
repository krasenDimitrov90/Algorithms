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
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    printList() {
        console.log(this);
        // let current = this.head;
        // while (current) {
        //     console.log({ current: current?.val, next: current?.next?.val })
        //     current = current.next;
        //     if (!current) break;
        // }
    }
}

const linkedList = new LinkedList();
linkedList.push('Hi');
// linkedList.push('there');
// linkedList.push('how');

linkedList.printList();

linkedList.unShift('Hellooo');
console.log('\n')
linkedList.printList();

// linkedList.pop();
// console.log('\n')
// linkedList.printList();

// linkedList.pop();
// console.log('\n')
// linkedList.printList();

// linkedList.pop();
// console.log('\n')
// linkedList.printList();

linkedList.shift();
console.log('\n')
linkedList.printList();