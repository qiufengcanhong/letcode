//dfs伪代码模版
//递归
function dfs(node, visited) {
  visited.add(node);

  for (next_node in node.children()) {
    if (!next_node in visited) 
      dfs(next_node, visited);
  }
}

//非递归
function dfs(tree) {
  if (tree.root === null) {
    return [];
  }

  visited, (stack = []), [tree.node];
  while (stack) 
    node = stack.pop();
    visited.add(node);

    process(node);
    nodes = generate_ralated_nodes(node);
    stack.push(nodes);
}