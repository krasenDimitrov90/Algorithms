class WeightedGraph {
    constructor() {
        this.adjacencyList = [];
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2, weight) {
        if (!this.adjacencyList[v1]) {
            this.adjacencyList[v1] = [];
        }
        if (!this.adjacencyList[v2]) {
            this.adjacencyList[v2] = [];
        }
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
}

let wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');

wg.addEdge('A', 'B', 5);
wg.addEdge('A', 'C', 10);
wg.addEdge('B', 'C', 20);

console.log(wg.adjacencyList);