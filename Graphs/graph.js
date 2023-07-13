class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

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
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dalas');
g.addVertex('NYC');

g.addEdge('Tokyo', 'Dalas');
g.addEdge('First', 'Second');

console.log(g);