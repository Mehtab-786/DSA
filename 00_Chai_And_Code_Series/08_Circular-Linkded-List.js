class CircularQueue {
    constructor(size) {
        this.size = size
        this.items = Array(5).fill(null)
        this.front = this.rear = -1
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size == this.front) {
            console.log('Queue is full')
        } else if (this.front == -1) {
            console.log('Queu is emtpy')
            this.front = this.rear = 0
            this.items[this.rear] = value
        } else {
            this.rear = (this.rear + 1) % this.size
            this.items[this.rear] = value
        }
    }

    dequeue() {
        if (this.front == -1) {
            console.log('Queue is emtpy!')
        } else if (this.front == this.rear) {
            console.log('Deleted Element: ', this.items[this.front])
            this.front = this.rear = -1
        } else {
            console.log('Deleted Element: ', this.items[this.front])
            this.front = (this.front + 1) % this.size
        }
    }

}

let cq = new CircularQueue(5)
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)
// cq.enqueue(60)
cq.dequeue()
cq.enqueue(60)
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
// console.log(cq)

