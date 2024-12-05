class Graph {
  constructor() {
    this.adjacencyList = {}
  }


  addNode (node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = []
    }
  }

  addEdge(node, edgeNode) {
    if (this.adjacencyList[node] && this.adjacencyList[edgeNode]) {
      this.adjacencyList[node].push(edgeNode)
      this.adjacencyList[edgeNode].push(node) // < this makes it an undirected list
    }
  }


  DFSrecursive(start) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; // Save reference to adjacencyList
  
    // function that we recursively call. 
    // We are also using an IIFE, where we call a function immediatly after initializing it. 
    // Define the recursive function
    (function dfs(node) {
      if(!node) return null;
  
      visited[node] = true;
      results.push(node);
  
      adjacencyList[node].forEach((neighbor) => {
        if(!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(start); // IIFE to immediately invoke the dfs function
  
    return results;
  }

  // Breadth First Search
  BFS(start) {
    const queue =[start];
    const result = [];
    const visited = {};
    let currentNode;
    const adjacencyList = this.adjacencyList

    visited[start] = true;

    while(queue.length) {
      currentNode = queue.shift()
      result.push(currentNode);

      adjacencyList[currentNode].forEach((neighbor) => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    };

    return result;
  }
}

const graph = new Graph()
graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("E")
graph.addNode("D")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "E")
graph.addEdge("B", "C")
graph.addEdge("C", "D")
graph.addEdge("E", "D")


// console.log(graph)

console.log("DFS:", graph.DFSrecursive("A"))
console.log("BFS:", graph.BFS("C"))



// Graph Visualization
//         A
//      /  |  \
//      B--C--E
//      \  | /
//         D