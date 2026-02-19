class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  addLast(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
  print() {
    if (!this.head) {
      console.log("Lista vacía");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const lista = new LinkedList();
lista.print();
console.log("---------");

lista.addLast("Water");

lista.addFirst({ id: 1, name: "Sara" });

lista.addLast("Fire");

lista.addLast("Carro");

lista.print();
