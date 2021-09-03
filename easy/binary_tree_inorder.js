var inorderTraversal = function (root) {
    let results = [];
    if (root == null) return results;
  function traverse(node) {
    if (node.left) traverse(node.left);
    results.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return results;
};
