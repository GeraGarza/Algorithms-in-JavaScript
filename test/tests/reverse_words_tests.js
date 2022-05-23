const { assert } = chai;
import {reverseWords, _reverseWords} from "../code/reverse_words.js"

describe("Reverse Words", () => {
  xit("Should reverse words", () => {
    assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
    assert.equal(_reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
  });
});
