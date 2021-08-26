class Stack {
  constructor(...values) {
    this.stack = values || [];
    this.size = values.length;
  }

  push(value) {
    this.stack.push(value);
    this.size = this.stack.length;
  }

  pop() {
    const lastItem = this.stack.pop();
    this.size = this.stack.length;
    return lastItem === undefined ? null : lastItem;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    const [value] = this.stack.slice(-1);
    return value;
  }

  swap() {
    if (this.stack.length >= 2) {
      const lastValueIndex = this.stack.length - 1;
      const temp = this.stack[lastValueIndex];
      this.stack[lastValueIndex] = this.stack[lastValueIndex - 1];
      this.stack[lastValueIndex - 1] = temp;
    }
  }
}

module.exports = Stack;
