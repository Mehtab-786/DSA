class Stack {
    constructor() {
        this.list = []
    }

    length() {
        return this.list.length
    }

    push(value) {
        this.list.unshift(value)
    }

    peek() {
        if (this.list.length === 0) {
            throw new Error("Stack is empty")
        }
        return this.list[0]
    }

    pop() {
        if (this.list.length === 0) {
            throw new Error("Stack is empty")
        }
        return this.list.shift()
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek()) // 3
console.log(stack.pop()) // 3
console.log(stack.peek()) // 2