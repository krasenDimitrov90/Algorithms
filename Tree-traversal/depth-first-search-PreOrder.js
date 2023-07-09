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

    // Depth First Search - PreOrder
    DFS() {
        if (!this.root) return [];
        let current = this.root;

        let visited = [];

        const searchInNode = (node) => {
            visited.push(node.val);
            if (node.left) searchInNode(node.left);
            if (node.right) searchInNode(node.right);
        };

        searchInNode(current);

        return visited;
    }

}

//           10
//         6    15
//       3   8     20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFS());  //  [10, 6, 3, 8, 15, 20]
