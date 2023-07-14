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
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dalas');
g.addVertex('NYC');

g.addEdge('Tokyo', 'Dalas');
g.addEdge('Tokyo', 'Yambol');
g.addEdge('First', 'Second');

console.log(g);
g.removeVertex('Yambol');
console.log(g);

