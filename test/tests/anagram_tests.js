
mocha.setup("bdd");
import { anagrams, _anagrams } from "../code/anagram.js";
const { assert } = chai;


describe("Anagrams", () => {
  xit("Should implement anagrams", () => {
    assert.equal(anagrams("hello world", "world hello"), true);
    assert.equal(anagrams("hellow world", "hello there"), false);
    assert.equal(anagrams("hellow world", "hello there!"), false);

    assert.equal(_anagrams("hello world", "world hello"), true);
    assert.equal(_anagrams("hellow world", "hello there"), false);
  });
});
