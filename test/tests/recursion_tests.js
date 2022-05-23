const { assert } = chai;
import { factorial, factorialize } from '../code/recursion.js';

describe("Factorial", () => {
  xit("Should implement factorial", () => {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), factorialize(5));
  });
});