
const { assert } = chai;
import {fibonacci, _fibonacci} from "../code/fibonacci.js"

describe("Fibonacci", () => {
  xit("Should implement fibonacci", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
    assert.equal(_fibonacci(1), 1);
    assert.equal(_fibonacci(2), 1);
    assert.equal(_fibonacci(3), 2);
    assert.equal(_fibonacci(10), 55);
  });
});
