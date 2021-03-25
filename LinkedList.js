class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const prevPointer = prevNode.next;

    newNode.next = prevPointer;
    prevNode.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const prevNode = this.traverseToIndex(index - 1);
    const currentNode = prevNode.next;

    prevNode.next = currentNode.next;
    this.length--;

    return this;
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    const listArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listArray);
  }
}

const list = new LinkedList(10);
list.append(11);
list.append(12);
list.append(13);
list.prepend(13);
list.prepend(10);
// list.insert(2, 9);
list.remove(5);
list.print();

console.log(list);
