export class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(record) {
    this.data.unshift(record);
  }

  dequeue() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

export const weave = (queueOne, queueTwo) => {
  const queueCombined = new Queue();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) queueCombined.enqueue(queueOne.dequeue());
    if (queueTwo.peek()) queueCombined.enqueue(queueTwo.dequeue());
  }

  return queueCombined;
};
