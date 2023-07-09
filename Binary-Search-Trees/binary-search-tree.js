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

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return newNode;
        }

        let currentNode = this.root;

        while (true) {
            if (currentNode === val) return undefined;
            let leftNode = currentNode.left;
            let rightNode = currentNode.right;

            if (currentNode.val > val) {
                // go to left
                if (!leftNode) {
                    currentNode.left = newNode;
                    return newNode;
                } else {
                    currentNode = leftNode;
                }
            } else if (currentNode.val < val) {
                // go to right
                if (!rightNode) {
                    currentNode.right = newNode;
                    return newNode;
                } else {
                    currentNode = rightNode;
                }
            }
        }
    }

    find(val) {
        let currentNode = this.root;
        if (currentNode.val === val) return currentNode;

        while (true) {
            if (currentNode.val > val) {
                // go to left
                if (!currentNode.left) return undefined;
                if (currentNode.left.val === val) return currentNode.left;
                currentNode = currentNode.left;

            } else {
                // go to right
                if (!currentNode.right) return undefined;
                if (currentNode.right.val === val) return currentNode.right;
                currentNode = currentNode.right;
            }
        }
    }

    // Teachers Solution for find
    // find(val) {
    //     if (!this.root) return undefined
    //     let currentNode = this.root;
    //     let found = false;

    //     while (currentNode && !found) {
    //         if (currentNode.val > val) {
    //             currentNode = currentNode.left;
    //         } else if (currentNode.val < val) {
    //             currentNode = currentNode.right;
    //         } else {
    //             found = true;
    //         }
    //     }

    //     if (!currentNode) return undefined;
    //     return currentNode;
    // }
}

let tree = new BinarySearchTree();
tree.insert(41);
tree.insert(20);
tree.insert(65);
tree.insert(29);
tree.insert(50);
tree.insert(91);
tree.insert(72);
tree.insert(99);
tree.insert(32);
tree.insert(11);
tree.insert(12);
