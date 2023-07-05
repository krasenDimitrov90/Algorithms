class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertOne(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return newNode;
        }

        let currentNode = this.root;
        let newNodeHasAdded = false;

        while (!newNodeHasAdded) {
            if (currentNode === val) return undefined;
            let leftNode = currentNode.left;
            let rightNode = currentNode.right;

            if (currentNode.val > val) {
                if (!leftNode) {
                    currentNode.left = newNode;
                    return newNode;
                } else {
                    currentNode = leftNode;
                }
            } else if (currentNode.val < val) {
                if (!rightNode) {
                    currentNode.right = newNode;
                    return newNode;
                } else {
                    currentNode = rightNode;
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insertOne(41);
tree.insertOne(20);
tree.insertOne(65);
tree.insertOne(29);
tree.insertOne(50);
tree.insertOne(91);
tree.insertOne(72);
tree.insertOne(99);
tree.insertOne(32);
tree.insertOne(11);
tree.insertOne(12);