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

  // Depth first Search
  // Breadth first Search

  BFS() {

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


console.log(graph)