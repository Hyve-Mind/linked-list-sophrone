class node {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class linkedList {
  constructor(name, head = null, tail = null) {
    this.name = name;
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    if (!this.head) {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new node(value);
    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
    }
    if (!this.tail) {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  get size() {
    if (!this.head) {
      return 0;
    }
    let currentNode = this.head;
    let length = 0;
    while (currentNode !== null) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  }

  get getHead() {
    return this.head;
  }

  get getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || this.size < 1 || index > this.size) {
      return null;
    } else {
      let currentNode = this.head;
      while (index > 0) {
        currentNode = currentNode.next;
        index -= 1;
      }
      return currentNode;
    }
  }

  pop() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
  }

  contains(value) {
    if (!this.head) {
      return new Error("No data in list");
    }
    let currentNode = this.head;
    let contains = false;
    let length = this.size;
    while (length > 0) {
      if (currentNode.value === value) {
        contains = true;
      }
      currentNode = currentNode.next;
      length -= 1;
    }
    return contains;
  }

  find(value) {
    if (!this.head) {
      return new Error("No data in list");
    }
    let currentNode = this.head;
    let index = 0;
    while (index < this.size) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index += 1;
    }
    return console.log("not found");
  }

  toString() {
    if (!this.head) {
      return new Error("No data in list");
    }
    let string = "";
    let currentNode = this.head;
    let length = this.size;
    while (length > 0) {
      string += currentNode.value + " -> ";
      currentNode = currentNode.next;
      length -= 1;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.size) {
      new Error("Provide valid index");
    } else if (index === 0) {
      const newNode = new node(value);
      const nextNode = this.at(index);
      nextNode.previous = newNode;
      newNode.next = nextNode;
      this.head = newNode;
    } else {
      const newNode = new node(value);
      const previousNode = this.at(index - 1);
      const nextNode = this.at(index);
      previousNode.next = newNode;
      newNode.previous = previousNode;
      nextNode.previous = newNode;
      newNode.next = nextNode;
    }
  }

  removeAt(index) {
    const previousNode = this.at(index - 1);
    const nextNode = this.at(index + 1);
    if (index === 0) {
      nextNode.previous = previousNode;
      this.head = nextNode;
    } else if (index === this.size - 1) {
      previousNode.next = nextNode;
      this.tail = previousNode;
    } else {
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }
  }
}
