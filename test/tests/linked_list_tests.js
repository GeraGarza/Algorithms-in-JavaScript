
const { assert } = chai;
import {LinkedList} from "../code/linked_list.js"

describe("Linked List", () => {
  xit("Should implement insertHead", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    assert.equal(chain.head.data, 1);
  });

  xit("Should implement size", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    assert.equal(chain.size(), 1);
  });

  xit("Should implement getHead", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    assert.equal(chain.getHead().data, 1);
  });

  xit("Should implement getTail", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    assert.equal(chain.getTail().data, 1);
  });

  xit("Should implement clear", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.clear();
    assert.equal(chain.size(), 0);
  });

  xit("Should implement removeHead", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.removeHead();
    assert.equal(chain.size(), 0);
  });

  xit("Should implement removeTail", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.removeTail();
    assert.equal(chain.size(), 0);
  });

  xit("Should implement insertTail", () => {
    const chain = new LinkedList();
    chain.insertTail(1);
    assert.equal(chain.getTail().data, 1);
  });

  xit("Should implement getAt", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    assert.equal(chain.getAt(0).data, 1);
  });

  xit("Should implement removeAt", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.removeAt(0);
    assert.equal(chain.size(), 0);
  });

  xit("Should implement insertAt", () => {
    const chain = new LinkedList();
    chain.insertAt(0, 1);
    assert.equal(chain.getAt(0).data, 1);
  });

  xit("Should implement forEach", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.insertHead(2);
    chain.forEach((node, index) => (node.data = node.data + index));
    assert.equal(chain.getTail().data, 2);
  });

  xit("Should implement iterator", () => {
    const chain = new LinkedList();
    chain.insertHead(1);
    chain.insertHead(2);
    for (let node of chain) node.data = node.data + 1;
    assert.equal(chain.getTail().data, 2);
  });
});
