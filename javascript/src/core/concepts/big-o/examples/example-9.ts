interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

function sum(node: Node | null): number {
  if (node === null) {
    return 0;
  }
  return node.value + sum(node.left) + sum(node.right);
}

// Answer: O(n) where n is the number of nodes in the tree.
// We visit each node exactly once to compute the sum, leading to a linear time complexity.

// Key Insight:
// The branching factor (2) doesn't multiply the work exponentially because we're not revisiting nodes.
// Each node appears in exactly one recursive call. The recursion tree matches the actual tree structure, not an exponential explosion.
