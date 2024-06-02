const Node = require('../node')

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this
    }

    
}

const singlyLinkedList = new SinglyLinkedList(2)

singlyLinkedList.append(3)
singlyLinkedList.append(4)
console.dir(singlyLinkedList, {depth: null})
singlyLinkedList.prepend(1)
console.dir(singlyLinkedList, {depth: null})

