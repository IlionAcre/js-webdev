class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.size = 0;
  }
  addItem(value) {
    const newNode = new Node(value);
    this.head.next = newNode;
  }
}

const lista = new LinkedList("Agua");
console.log(lista.head.next);

lista.addItem("Fuego");
console.log(lista.head.next);
