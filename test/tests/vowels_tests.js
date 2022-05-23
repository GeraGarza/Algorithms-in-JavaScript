const { assert } = chai;
import {vowels} from "../code/vowels.js"


describe("Vowels", () => {
  xit("Should count vowels", () => {
    assert.equal(vowels("hello world"), 3);
  });
});
