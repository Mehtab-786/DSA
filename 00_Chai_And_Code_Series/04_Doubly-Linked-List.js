class Node {
    constructor(data = null) {
        this.prev = null
        this.data = data
        this.next = null
    }
};

class DoublyLL {
    constructor(head = null) {
        this.head = head
    }

    insertAtStart(value) {
        let newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            return
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    insertAtEnd(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
            return
        }

        let temp = this.head
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
        newNode.prev = temp
    }

    insertAtMiddle(value, position) {
        let newNode = new Node(value)
        let temp = this.head
        if (this.head == null) {
            this.head = newNode
            return
        }

        while (temp != null && temp.data != position) {
            temp = temp.next
        }

        if (temp == null) {
            console.log(`Position ${position} not found in the list.`);
            return
        }
        newNode.next = temp.next
        temp.next.prev = newNode
        newNode.prev = temp
        temp.next = newNode

    }

    deleteNode(value) {
        let temp = this.head
        if (this.head == null) {
            console.log('Your list is empty');
            return
        }
        if (temp.data == value) {
            this.head = temp.next
            this.head.prev = null
            return
        }
        while (temp.next != null) {
            if (temp.data == value) {
                temp.prev.next = temp.next
                temp.next.prev = temp.prev
                return;
            } else temp = temp.next
        }
        if (temp.data == value) {
            temp.prev.next = null
            return
        }

    }

    printList() {
        if (this.head == null) {
            console.log('Your list is empty');
            return
        }

        let tempHead = this.head;
        while (tempHead != null) {
            // console.log(tempHead.data)
            process.stdout.write(`${tempHead.data} <-> `)
            tempHead = tempHead.next
        }
        process.stdout.write(`null`)
    }
}

let DoublyLinkedList = new DoublyLL()
// DoublyLinkedList.insertAtEnd(1)
// DoublyLinkedList.insertAtEnd(2)
// DoublyLinkedList.insertAtEnd(3)
// DoublyLinkedList.insertAtStart(100)
// DoublyLinkedList.insertAtMiddle(50, 100)
// DoublyLinkedList.deleteNode(3)
// DoublyLinkedList.printList()



// questions ------------

//    * Counts the number of nodes in a doubly linked list.
//    * @param {Object|null} head - The head node of the doubly linked list (or null for empty list).
//    * Each node is expected to have the shape `{ val: number, prev: Object|null, next: Object|null }`.
//    * @returns {number} The total number of nodes.
function countNodes(head) {
    // Your implementation here
    let count = 0;

    let current = head;
    while (current != null) {
        count++;
        current = current.next;
    }
    
    return count;
}

console.log(countNodes)
// {"values":[5,10,15,20]}

