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
            let leftNode = currentNode.left;
            let rightNode = currentNode.right;

            if (leftNode && rightNode) {
                currentNode = currentNode.val > newNode.val
                    ? leftNode : rightNode;
                continue;
            }

            if (!leftNode && !rightNode) {
                if (currentNode.val > val) {
                    currentNode.left = newNode;
                } else {
                    currentNode.rigth = newNode;
                }
                return newNode;
            }

            if (leftNode && !rightNode) {
                currentNode.right = newNode;
                return newNode;
            } else if (!leftNode && rightNode) {
                currentNode.left = newNode;
                return newNode;
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