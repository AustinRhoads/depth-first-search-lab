function depthFirstSearch(rootNode, vertices, edges){

    var stack = [];
    var explored = [];


    
    stack.push(rootNode);
    let firstNode;

    while(stack.length > 0){
        
        firstNode = stack.pop();
        firstNode.discovered = true;
        let adjacentNodes = findAdjacentNodes(firstNode, vertices, edges);

        for(const vertice of adjacentNodes){
            if(vertice.discovered !== true){
                stack.push(vertice);
            }
            
        }

   
        explored.push(firstNode)
    }



   
    console.log(explored)
    return explored;
    
}

function findAdjacentNodes(rootNode, vertices, edges){
    let adjacentEdges = edges.filter(edge => edge.includes(rootNode.name) && edge.discovered !== true);
    let adjacentAddresses = [... new Set(adjacentEdges.flat(1))];

    let rootIndex = adjacentAddresses.indexOf(rootNode.name);
    adjacentAddresses.splice(rootIndex, 1)

    let adjacentNodes = [];

    for(const vertex of vertices){
        if(adjacentAddresses.includes(vertex.name)){
            adjacentNodes.push(vertex)
        }
    }

   
    return adjacentNodes;

}

let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
	{name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
	{name: '23rd&Lex', discovered: null}
]

let root = vertices[0];



depthFirstSearch(root, vertices, edges)