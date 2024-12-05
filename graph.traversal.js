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
}

const graph = new Graph()
graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("V")
graph.addNode("D")
graph.addNode("T")

console.log(graph)