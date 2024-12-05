class Graph {
  constructor() {
    this.nodes = {}
  }

  addNode(node) {
    if (!this.nodes[node]) {
      this.nodes[node] = []
    }
  }

  addEdge(node, edgeNode) {
    if (this.nodes[node] && this.nodes[edgeNode]) {
      this.nodes[node].push(edgeNode)
    }
  }
}

const graph = new Graph()
graph.addNode("Mom")
graph.addNode("Aunt")
graph.addNode("Friend")
graph.addEdge("Mom", "Aunt")
graph.addEdge("Mom", "Friend")
graph.addEdge("Aunt", "Mom")
graph.addEdge("Friend", "Mom")

console.log(graph)

module.exports = { Graph };
