class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Undirected graph 
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = [];
        }
        if (!this.adjacencyList[v2]) {
            this.adjacencyList[v2] = [];
        }
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v1) {
        if (!this.adjacencyList[v1]) return;

        for (let v2 of this.adjacencyList[v1]) {
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        }

        // deleting the vertex is not a common thing
        // more often we want to keep the vertex and only remove the conections (edges)
        delete this.adjacencyList[v1];
    }

    // Depth First Traversal
    depthFirstRecursive(vertex, visited = [], result = []) {
        if (!this.adjacencyList[vertex]) return undefined;
        if (this.adjacencyList[vertex].length === 0) return;

        visited.push(vertex);
        result.push(vertex);

        for (let v of this.adjacencyList[vertex]) {
            if (!visited.includes(v)) {
                this.depthFirstRecursive(v, visited, result);
            }
        }

        return result;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.DFT('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F