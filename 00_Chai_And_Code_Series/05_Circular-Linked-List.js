// Circular Singly Linked List
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}


class CircularSinglyLL {
    constructor(head = null) {
        this.head = head
    }

    insertAtEnd(value) {
        let newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            newNode.next = this.head
            return
        }

        let current = this.head
        while (current.next != this.head) {
            current = current.next
        }

        newNode.next = this.head
        current.next = newNode

    }

    insertAtBeginning(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            newNode.next = this.head
            return
        }

        let current = this.head
        while (current.next != this.head) {
            current = current.next
        }

        current.next = newNode
        newNode.next = this.head
        this.head = newNode
    }

    insertAtMiddle(value, position) {
        let newNode = new Node(value)
        if (this.head === null) {
            console.log('Empty List')
            return
        }

        let current = this.head

        do {
            if (current.data == position) {
                newNode.next = current.next
                current.next = newNode
                return
            }
            current = current.next
        } while (current != this.head);

        console.log('We reached the end, because your position is not machted ')
    }

    deleteNode(value) {
        if (this.head === null) {
            console.log('Empty List')
            return
        }

        let current = this.head
        let prev = current

        do {
            
            if(current.data == value){
                prev.next = current.next
                return
            }
            
            prev = current
            current = current.next
        } while (current != this.head );

        console.log('Cannot find your node')
    
    }

    printLL() {
        if (this.head === null) {
            console.log('You Linked List is empty')
            return
        }

        let current = this.head
        while (current.next != this.head) {
            console.log(current.data)
            current = current.next
        }
        console.log(current.data)
    }

}

let circularLL = new CircularSinglyLL()
circularLL.insertAtEnd(1)
circularLL.insertAtEnd(2)
circularLL.insertAtBeginning(0)
circularLL.insertAtMiddle(3, 2)
circularLL.deleteNode(3)
circularLL.printLL()
// console.log(circularLL)