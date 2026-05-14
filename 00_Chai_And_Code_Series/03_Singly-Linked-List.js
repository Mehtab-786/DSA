// Array have contiguous memory allocation.
// The problem with array is that everytime we will not be able to get contiguous memory, what if we want to add element and the array doesn't have enough space to accomodate the new element, then we have to create a new array with more size and copy all the elements. So to overcome this problem we can use linked list, in linked list we don't need contiguous memory allocation, we can store the elements in different blocks of memory and we can link them together using pointers.

// Single Linked List is a data structure that have nodes, each node have two parts, one is data and other is pointer to next node. 

// you can create new blocks,until there is no more memory left in the system. 

// problem is you can't go back to previous node, you can only go forward to next node.

class Node {    // single node 
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList { // linked list
    constructor(head = null) {
        this.head = head;
    }

    insertAtEnd(value) {
        let newNode = new Node(value);
        let temp = this.head
        if (this.head == null) {
            this.head = newNode
            return
        }
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
    }

}


let singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.insertAtEnd(10)
singlyLinkedList.insertAtEnd(20)
singlyLinkedList.insertAtEnd(30)
singlyLinkedList.insertAtStart(5)
// singlyLinkedList.insertAtMid(20.5, 20)
singlyLinkedList.deleteNode(5)
singlyLinkedList.printList()