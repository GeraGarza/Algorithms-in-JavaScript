const { assert } = chai;
import { capitalize, _capitalize } from "../code/capitalization.js";

describe("Capitalization", () => {
  xit("Should capitalize phrase", () => {
    assert.equal(capitalize("hello world"), "Hello World");
    assert.equal(_capitalize("hello world"), "Hello World");
  });
});
