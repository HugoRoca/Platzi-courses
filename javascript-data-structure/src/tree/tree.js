//       10
//   4        20
// 2   8   17    170

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // search with value and return all nodes
  search(value, tree = this.root) {
    if (!tree) return `Element not found`;
    if (value > tree.value) {
      return this.search(value, tree.right);
    }
    if (value < tree.value) {
      return this.search(value, tree.left);
    }

    return tree;
  }
}

const myTree = new BinarySearchTree();
