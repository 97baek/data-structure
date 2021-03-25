class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
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

  lookup(value) {
    if (!this.root) {
      // 루트 노드가 없으면
      return false; // false 리턴
    }
    let currentNode = this.root; // 현재 노드를 루트 노드로 설정
    while (currentNode) {
      if (value < currentNode.value) {
        // 찾는 값이 현재 노드보다 작으면
        currentNode = currentNode.left; // 왼쪽 노드 탐색
      } else if (value > currentNode.value) {
        // 찾는 값이 현재 노드보다 크면
        currentNode = currentNode.right; // 오른쪽 노드 탐색
      } else if (currentNode.value === value) {
        // 찾는 값이 현재 노드와 같으면
        return currentNode; // 현재 노드 값 리턴
      }
    }
    return null; // 값을 발견하지 못하면 null 리턴
  }

  inOrder(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }
    // 찾고자 하는 노드를 발견했을 때
    if (value === node.value) {
      // 자식이 없는 노드면
      if (node.left === null && node.right === null) {
        return null;
      }
      // 왼쪽 자식이 없으면 오른쪽 노드가 삭제된 위치에 들어감
      if (node.left === null) {
        return node.right;
      }
      // 오른쪽 자식이 없으면 왼쪽 노드가 삭제된 위치에 들어감
      if (node.right === null) {
        return node.left;
      }
      // 노드의 자식이 두개면 tempNode는 삭제할 node의 right가 되고
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      node.value = tempNode.value;
      node.right = this.removeNode(node.right, tempNode.value);
      return node;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }
}

const tree = new BST();
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(43);
tree.insert(17);
tree.inOrder(tree.getRoot());
