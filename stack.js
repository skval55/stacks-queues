/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.stack = [];
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  updateVals() {
    this.last = this.stack[0];
    this.size = this.stack.length;
    this.first = this.stack[this.size - 1];
  }
  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    this.stack.push(newNode);
    this.updateVals();
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Stack is empty cannot pop");
    const removed = this.stack.pop();
    this.updateVals();
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    else return false;
  }
}

module.exports = Stack;
