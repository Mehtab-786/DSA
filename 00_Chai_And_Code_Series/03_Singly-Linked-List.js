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

    insertAtStart(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head;
        this.head = newNode
    }

    insertAtMid(value, location) { //location -> starting position
        let newNode = new Node(value)
        let temp = this.head
        while (temp.next != null && temp.data != location) {
            temp = temp.next
        }
        if (temp.next == null) {
            console.log("No data found !!")
            return
        }
        newNode.next = temp.next
        temp.next = newNode
    }

    deleteNode(value) {
        if (this.head == null) {
            console.log('List is empty')
            return
        }

        if (this.head.data == value) {
            this.head = this.head.next
            return
        }

        let temp = this.head
        let prev = temp

        while (temp.next != null && temp.data != value) {
            prev = temp
            temp = temp.next
        }

        // value not found
        if (temp == null) {
            console.log('No data found !!')
            return
        }

        // delete node 
        prev.next = temp.next
    }

    printList() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}


let singlyLinkedList = new SinglyLinkedList()
// singlyLinkedList.insertAtEnd(10)

// Given a singly linked list represented as an array and an integer `val`, insert the value `val` into the linked list at a specified position. If the position is greater than the length of the linked list, append the value to the end. Return the linked list as an array after the insertion.

function insertIntoList(head, pos, val) {
    // head: array of integers representing the linked list
    // pos: position to insert the new value
    // val: value to be inserted

    let newArr = []
    if (pos === 0) return [val, ...head]
    if (pos >= head.length) return [...head, val]
    for (let i = 0; i < head.length; i++) {
        if (i == pos) {
            newArr.push(val)
        }
        newArr.push(head[i])
    }
    return newArr;
}

// console.log(insertIntoList([1,2,3,4], 4, 5))
// console.log(insertIntoList([1,2,4], 2, 3))

