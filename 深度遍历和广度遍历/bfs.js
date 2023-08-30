//bfs伪代码模版
function bfs(graph, start, end) {
  queue = [];
  queue.append([start]);
  visited.add(start);

  while (queue) 
  node = queue.pop();
  visited.add(node);

  process(node);
  nodes = generate_related_nodes(node);
  queue.add(nodes);
}
