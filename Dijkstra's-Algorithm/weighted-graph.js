// Simple priority queue
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
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
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    shortestPath(start, end) {
        let distances = [];
        let priorityQueue = new PriorityQueue();
        let paths = {};
        let path = [end];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            paths[vertex] = null;
        }

        while (priorityQueue.values.length) {
            smallest = priorityQueue.dequeue().val;

            if (smallest === end) {
                // WE ARE DONE
                let node = paths[end];
                while (node) {
                    path.push(node)
                    node = paths[node];
                }
                break;
            }

            for (let [index, neighbor] of Object.entries(this.adjacencyList[smallest])) {

                let tempDistance = distances[smallest] + neighbor.weight;
                if (tempDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = tempDistance;
                    paths[neighbor.node] = smallest;
                    priorityQueue.enqueue(neighbor.node, tempDistance);
                }
            }
        }   
        
        return path.reverse();
    }
}

//             4
//        A---------B
//     2 /           \ 3
//      /   2      3  \ 
//     C-------D-------E
//     |        \     / 
//     |       1 \   / 1
//     |          \ /
//     |___________F 
//         4    

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.shortestPath('A', 'E'));