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

    // Breadth First Search
    BFS() {
        if (!this.root) return [];
        let current = this.root;

        let queue = [];
        let visited = [];

        queue.push(current);

        while (queue.length > 0) {
            current = queue.shift();
            visited.push(current.val);
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
