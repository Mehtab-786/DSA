// FIFO -> First In First Out

// if empty , -> Front = rear = -1
// inserting 1st element -> Front++, rear++
// insert => rear = rear++ (overflow -> enough memory)
// delete => front = front++ (underflow -> if empty queue)


class Queue {
    constructor() {
        this.item = [];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    insert(value) {
        this.station.push(value);
    }

    delete() {
        if(this.isEmpty()) {
            console.log('Queue if ptly')
        }
        return this.item.shift();
    }
}

