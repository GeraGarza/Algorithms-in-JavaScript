
  const { assert } = chai;
  import {Queue} from "../code/stacks.js"

  describe("Queue from Stacks", () => {
    xit("Should implement queue using two stacks", () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      assert.equal(queue.peek(), 1);
      assert.equal(queue.dequeue(), 1);
      assert.equal(queue.dequeue(), 2);
      assert.equal(queue.dequeue(), 3);
      assert.equal(queue.dequeue(), undefined);
    });
  });
  