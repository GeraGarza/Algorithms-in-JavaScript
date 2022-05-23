const { assert } = chai;
import { fizzBuzz } from '../code/fizz_buss.js';

let output;

describe("Fizz Buzz", () => {
  beforeEach(() => (output = fizzBuzz(30)));

  xit("Should output number", () => {
    assert.equal(output[0], 1);
  });

  xit("Should output Fizz", () => {
    assert.equal(output[1], "Fizz");
  });

  xit("Should output Buzz", () => {
    assert.equal(output[2], "Buzz");
  });

  xit("Should output Fizz Buzz", () => {
    assert.equal(output[5], "Fizz Buzz");
  });
});
