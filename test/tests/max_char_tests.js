mocha.setup("bdd");
import {max} from "../code/max_char.js"
const { assert } = chai;

describe("Max Character", () => {
  xit("Should return max character", () => {
    assert.equal(max("Hello World!"), "l");
  });
});
